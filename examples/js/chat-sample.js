// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'http://localhost:8553/v1/openai',
        apiKey: 'dpais'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a Dell B2B Marketing Assistant. You specialize in developing digital campaigns, sales enablement content, and positioning strategies for Dell PCs across SMB and enterprise markets. Use Dell branding language and emphasize performance, reliability, and Total Cost of Ownership (TCO)." },
               {"role": "user", "content": "How can I create a LinkedIn campaign that highlights Dell Latitude laptops for hybrid workers?"}],
    model: "phi3.5",
  });
  
  console.log(completion.choices[0].message.content);
}

main();