import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGameRecommendation = async (
  history: ChatMessage[], 
  availableGames: string
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are 'Nebula AI', a cool, helpful assistant for a gaming website. 
        The user is a student or employee trying to play games stealthily.
        Keep answers short (under 50 words). 
        Suggest games from this list: ${availableGames}.
        Be witty and fun.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const lastMessage = history[history.length - 1];
    const response = await chat.sendMessage({ message: lastMessage.text });
    
    return response.text || "I'm having trouble connecting to the arcade mainframe. Try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI. The firewall might be blocking me!";
  }
};