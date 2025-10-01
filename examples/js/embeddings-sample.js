import { OpenAI } from 'openai';
import fs from 'fs';


const client = new OpenAI({
  apiKey: 'dpais',
  baseURL: 'http://localhost:8553/v1/openai',
});

// Text Embedding Request
const textResponse = await client.embeddings.create({
  model: 'clip',
  input: ['otter', 'horse'],
  encoding_format: 'float',
});

// Convert Image to Base64
const imagePath = 'path/to/imageofanotter.jpg';
const imageBuffer = fs.readFileSync(imagePath);
const encodedImage = imageBuffer.toString('base64');

// Image Embedding Request
const imageResponse = await client.embeddings.create({
  model: 'openai-clip',
  encoding_format: 'float',
  images: [encodedImage]  
  }
console.log(imageResponse);