import boto3
# Voice Interaction (Speech To Text)

# transcribe: converting 'audio' file stored in S3 into text.

# Initialize AWS Transcribe client
transcribe = boto3.client('transcribe', region_name='us-east-1')

def transcribe_audio(file_uri):
    # File URI: S3 location of the audio file (must be in an S3 bucket)
    job_name = "order_transcription"  # Job name can be anything unique
    result = transcribe.start_transcription_job(
        TranscriptionJobName=job_name,
        LanguageCode='en-US',
        Media={'MediaFileUri': file_uri}  # S3 URI of the audio file
    )
    print(f"Transcription job started: {result}")
    
    # Poll the status of the transcription job
    status = transcribe.get_transcription_job(TranscriptionJobName=job_name)
    while status['TranscriptionJob']['TranscriptionJobStatus'] not in ['COMPLETED', 'FAILED']:
        status = transcribe.get_transcription_job(TranscriptionJobName=job_name)
    
    if status['TranscriptionJob']['TranscriptionJobStatus'] == 'COMPLETED':
        transcript_uri = status['TranscriptionJob']['Transcript']['TranscriptFileUri']
        return transcript_uri
    else:
        return None
