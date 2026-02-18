
import { GoogleGenAI } from "@google/genai";

/**
 * Gets a game recommendation or chat response from Gemini in JavaScript.
 * @param {Array} history - The chat history
 * @param {string} availableGames - Comma separated list of game titles
 */
export const getGameRecommendation = async (history, availableGames) => {
  // Always create a new instance right before making an API call
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const contents = history.map(msg => ({
    role: msg.role === 'model' ? 'model' : 'user',
    parts: [{ text: msg.text }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `You are Nebula AI, a helpful assistant for a secret browser games site. 
        Available games: ${availableGames}.
        Keep your tone cool and brief. Recommend games from the list when appropriate.`,
      }
    });

    // Extracting text output from GenerateContentResponse using the .text property
    return response.text || "Something went wrong with my logic, but Slope is always fun!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "API Error. Try again in a bit!";
  }
};
