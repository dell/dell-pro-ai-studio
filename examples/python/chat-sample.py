# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI

client = OpenAI(api_key="dpais", base_url="http://localhost:8553/v1/openai")

response = client.chat.completions.create(
    model="phi3.5",
    messages=[
        {
            "role": "system",
            "content": "You are a creative writing assistant who helps improve clarity and tone."
        },
        {
            "role": "user",
            "content": "Write a short story about a time traveler who accidentally becomes their own ancestor."
        }
    ],
    stream=False
)

print(response.choices[0].message.content)
