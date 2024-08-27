import { Request, Response } from "express";
import {generateTextWithMini}  from "../utils/openaifile"; 

export const generateTextController = async (req: Request, res: Response): Promise<void> => {
    const { prompt } = req.body;

    if (!prompt) {
        res.status(400).json({ success: false, message: "Prompt is required" });
        return;
    }

    try {
        const generatedText = await generateTextWithMini(prompt);
        res.json({ success: true, generatedText });
    } catch (error: any) {
        console.error("Error generating text:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
