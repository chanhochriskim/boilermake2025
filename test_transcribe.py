from transcribe import transcribe_audio

# Use the S3 URI of the uploaded audio file (replace with your actual S3 URI)
audio_file_uri = "https://chick-fil-lingo-audio-files.s3.us-east-1.amazonaws.com/test1.m4a"

# Call the transcribe_audio function from transcribe.py
transcription_result = transcribe_audio(audio_file_uri)

if transcription_result:
    print(f"Transcription result URI: {transcription_result}")
else:
    print("Transcription failed.")
