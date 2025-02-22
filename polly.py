import boto3
# TEXT to SPEECH conversion --> convert AI text into voice. 


# polly: AI generating response after reading through the file & repsonse in text.


# Initialize AWS Polly client
polly = boto3.client('polly')

def text_to_speech(text, output_filename="response.mp3"):
    response = polly.synthesize_speech(
        Text=text,
        OutputFormat="mp3",
        VoiceId="Matthew"  # You can change the voice here
    )

    # Save the speech to an audio file
    with open(output_filename, "wb") as file:
        file.write(response['AudioStream'].read())
    return output_filename

# Test the function with a sample text
result = text_to_speech("Suck ma' dick Alex Kolyaskin")
print(f"Generated audio file: {result}")