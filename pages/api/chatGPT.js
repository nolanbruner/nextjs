import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (!configuration.apiKey) {
    return res.status(500).json({
      error: { message: "OpenAI API key not configured" },
    });
  }

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct", // ✅ replacement for text-davinci-003
      prompt: `Suggest an animal similar to ${req.body.animal}`,
      max_tokens: 100,
    });

    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.error("OpenAI API error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: {
        message: error.response?.data?.error?.message || error.message,
      },
    });
  }
}




function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();

  return `Answer the Questions

Question: How many sides are on a coin?
Answer: two.

Question:Why is grass green?
Answer:Grass is green because of the presence of chlorophyll throughout the leaves and stems.

Question: ${capitalizedAnimal} ?
Answer:`;
}
