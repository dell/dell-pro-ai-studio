from openai import OpenAI
import base64
client = OpenAI(api_key="dpais", base_url="http://localhost:8553/v1/openai")

response = client.images.create_variation(
  image=open("imageToBeEnhanced.png", "rb"),
  model="realesrgan"    
 )

b64_image = response.data[0].b64_json

# Decode base64 and write to a file
with open("enhanced_image.png", "wb") as f:
    f.write(base64.b64decode(b64_image))