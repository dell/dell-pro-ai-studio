import fs from "fs";
import OpenAI from "openai";
import fs from 'fs';


const client = new OpenAI({
  apiKey: 'dpais',
  baseURL: 'http://localhost:8553/v1/openai',
});

async function main() {
    const translation = await openai.audio.translations.create({
        file: fs.createReadStream("speech.mp3"),
        model: "whisper",
    });

    console.log(translation.text);
}
main();