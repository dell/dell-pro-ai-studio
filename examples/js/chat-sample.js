// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'http://localhost:8553/v1/openai',
    apiKey: 'dpais'
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{
                role: "system",
                content: "You are a creative writing assistant who helps improve clarity and tone."
            },
            {
                role: "user",
                content: "Write a short story about a time traveler who accidentally becomes their own ancestor."
            }
        ],
        model: "phi3.5",
    });

    console.log(completion.choices[0].message.content);
}

main();
