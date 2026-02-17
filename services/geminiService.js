import { GoogleGenAI } from "@google/genai";

// Safely retrieve API Key avoiding ReferenceError for 'process'
const getApiKey = () => {
  if (typeof process !== "undefined" && process.env) {
    return process.env.API_KEY;
  }
  // Fallback for browser shim
  if (typeof window !== "undefined" && window.process && window.process.env) {
    return window.process.env.API_KEY;
  }
  return "";
};

// Initialize with safe key retrieval. 
// Note: If key is missing, API calls will fail gracefully in the function below.
const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const getGameRecommendation = async (
  history, 
  availableGames
) => {
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