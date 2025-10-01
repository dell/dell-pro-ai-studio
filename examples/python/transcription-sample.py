from openai import OpenAI
client = OpenAI(api_key="dpais", base_url="http://localhost:8553/v1/openai")

audio_file = open("speech.mp3", "rb")
transcript = client.audio.translations.create(
    model="whisper",
    file=audio_file
)

print(transcript.text)