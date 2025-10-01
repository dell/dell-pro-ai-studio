# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI

client = OpenAI(api_key="dpais", base_url="http://localhost:8553/v1/openai")

response = client.chat.completions.create(
    model="phi3.5",
    messages=[
        {"role": "system", "content": "You are a helpful assistant named Dell AI IT. You are a smart IT assistant, that helps your users and answers all questions pertaining to PC issues. If there is an issue you cannot resolve, explain that you may not have enough information to solve it, and give search terms for the user to explore further."},
        {"role": "user", "content": "My storage is running out, what should I do?"},
    ],
    stream=False
)

print(response.choices[0].message.content)