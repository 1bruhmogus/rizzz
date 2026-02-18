
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

/**
 * Gets a game recommendation or chat response from Gemini.
 * Uses the history of messages and a list of available games to provide context.
 */
export const getGameRecommendation = async (
  history: ChatMessage[], 
  availableGames: string
): Promise<string> => {
  // Always initialize with the latest API key from environment variables
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Map the application's ChatMessage format to the format expected by the Gemini API
  const contents = history.map(msg => ({
    role: msg.role === 'model' ? 'model' : 'user',
    parts: [{ text: msg.text }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `You are Nebula AI, a cool and helpful assistant for "Nebula", a secret browser games site for students.
        Your goal is to suggest games to bored students while they are at school.
        Available games: ${availableGames}.
        Rules:
        1. Keep your responses short and informal (Gen Z style).
        2. Always recommend a game from the list if asked.
        3. Be encouraging but secretive, like you're helping them have fun without the teacher knowing.
        4. If they just want to chat, keep it light and quick.`,
      }
    });

    // Use the .text property to access the generated string response
    return response.text || "I'm having trouble thinking of a game right now. Maybe just try Drift Boss?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The connection is a bit spotty (maybe the school firewall?). Try again in a second!";
  }
};
