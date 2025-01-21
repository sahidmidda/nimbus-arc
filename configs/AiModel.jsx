import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

// const chatSession = model.startChat({
export const AiDesignIdeaChatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Based on Logo of type \"Modern Mascot\". Generate a text prompt to create Logo for Logo title/Brand name : \"Indian Spicy Affair\" with decription: \"an indian restaurant with spices filled up in their each dish\" and refering to prompt: \"A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character\". Give me 5/6 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with only ideas field\n\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"ideas\": [\n    \"Chef character with chili\",\n     \"Smiling elephant with spices\",\n    \"Friendly tiger holding curry\",\n    \"Playful cook with vibrant spices\",\n    \"Animated spice jar character\" ,\n    \"Mascot chef with indian hat\"\n  ]\n}\n```\n" },
            ],
        },
    ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());