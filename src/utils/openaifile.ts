
import OpenAI from "openai"
import dotenv from "dotenv"
dotenv.config()


const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);





export const generateTextWithMini = async (prompt:string):Promise<string> => {
    try {
        const completion:any = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
            max_tokens: 100,
            temperature: 0.7,
        });

        return completion.choices[0].message.content.trim();
    } catch (error:any) {
        console.error("Error generating text:", error.error.message);
        throw new Error(error.error.message);
    }
};


