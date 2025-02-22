from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
import boto3

# Backend logic --> Flask, AI interaction 


app = Flask(__name__)

# AWS Transcribe client setup
transcribe = boto3.client('transcribe')

# Load LLAMA model (same as before)
model_name = "facebook/llama-2-7b"  
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

def generate_response(input_text):
    inputs = tokenizer(input_text, return_tensors="pt")
    outputs = model.generate(inputs["input_ids"])
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

# Speech-to-Text (Transcribe) helper function
def transcribe_audio(file_uri):
    job_name = "order_transcription"
    result = transcribe.start_transcription_job(
        TranscriptionJobName=job_name,
        LanguageCode='en-US',
        Media={'MediaFileUri': file_uri}  # S3 URI of the audio file
    )
    status = transcribe.get_transcription_job(TranscriptionJobName=job_name)
    while status['TranscriptionJob']['TranscriptionJobStatus'] not in ['COMPLETED', 'FAILED']:
        status = transcribe.get_transcription_job(TranscriptionJobName=job_name)
    
    if status['TranscriptionJob']['TranscriptionJobStatus'] == 'COMPLETED':
        transcript_uri = status['TranscriptionJob']['Transcript']['TranscriptFileUri']
        return transcript_uri
    return None

@app.route('/order', methods=['POST'])
def handle_order():
    data = request.json
    order_audio_uri = data.get('audio_file_uri')  # The URI of the audio file in S3
    
    # Step 1: Transcribe the audio file to text
    transcription = transcribe_audio(order_audio_uri)
    if transcription:
        # Use the transcription to generate a response with the LLAMA model
        # You would normally fetch the transcribed text, but here's how it's handled
        order_text = transcription  # For now, just mock it for testing
        response = generate_response(order_text)
        return jsonify({"message": "Order received!", "response": response})
    else:
        return jsonify({"message": "Audio transcription failed."}), 400

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
