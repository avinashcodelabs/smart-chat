import express from 'express';
import type { Request, Response } from 'express';
import OpenAI from 'openai';

const app = express();
const PORT = process.env.PORT || 3000;
const client = new OpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: process.env['OPENAI_API_KEY'], // required but ignored
});

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/api/hello', async (req: Request, res: Response) => {
  res.json({ message: 'hello' });
});

app.post('/api/chat', async (req: Request, res: Response) => {
  const { prompt } = req.body;
  const response = await client.chat.completions.create({
    model: 'gpt-oss:20b',
    temperature: 0.2,
    max_completion_tokens: 100,
    messages: [{ role: 'user', content: prompt }],
  });
  res.json({ message: response.choices[0].message.content });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
