# Please install OpenAI SDK first: `pip3 install openai`


from openai import OpenAI
import base64
client = OpenAI(api_key="dpais", base_url="http://localhost:8553/v1/openai")

textResponse = client.embeddings.create(
  model="openai-clip",
  input="The food was delicious and the waiter...",
  encoding_format="float"
)

with open("path/to/image.jpg", "rb") as image_file:
  encoded_image = base64.b64encode(image_file.read()).decode("utf-8")

image_response = client.embeddings.create(
  model="openai-clip",
  input=None,  
  encoding_format="float",
  extra_body={"images": [encoded_image] } # Pass images as base64 string
)