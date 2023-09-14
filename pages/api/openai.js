import axios from 'axios';

export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt,
      max_tokens: 500,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json(response.data.choices[0].text);
  } catch (error) {
    res.status(500).json({ error: 'Error generating meal plan' });
  }
}
