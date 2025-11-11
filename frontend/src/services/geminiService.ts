// src/services/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildSystemPrompt } from "@/utils/tutoringContext";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

if (!API_KEY) {
  console.error("VITE_GOOGLE_API_KEY non è configurata nel file .env");
}

// Inizializza l'API di Google Gemini
const genAI = new GoogleGenerativeAI(API_KEY);

// Usa il modello gemini-2.5-flash (più recente e performante)
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: buildSystemPrompt(),
});

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

class GeminiChatService {
  private chatSession: any = null;

  async initializeChat() {
    try {
      this.chatSession = model.startChat({
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 1024,
        },
        history: [],
      });
      return true;
    } catch (error) {
      console.error("Errore nell'inizializzazione della chat:", error);
      return false;
    }
  }

  async sendMessage(message: string): Promise<string> {
    try {
      if (!this.chatSession) {
        await this.initializeChat();
      }

      const result = await this.chatSession.sendMessage(message);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error("Errore nell'invio del messaggio:", error);

      // Gestione errori specifici
      if (error instanceof Error) {
        if (error.message.includes("API key")) {
          return "Mi dispiace, c'è un problema con la configurazione. Per favore contatta direttamente Salvatore via email o telefono.";
        }
        if (
          error.message.includes("quota") ||
          error.message.includes("limit")
        ) {
          return "Mi dispiace, ho raggiunto il limite di richieste. Per favore contatta direttamente Salvatore D'Ambrosio al numero +39 3384591601 o via email a sd.io@hotmail.com.";
        }
      }

      return "Mi dispiace, si è verificato un errore. Per favore riprova o contatta direttamente Salvatore via email (sd.io@hotmail.com) o telefono (+39 3384591601).";
    }
  }

  resetChat() {
    this.chatSession = null;
  }
}

// Esporta un'istanza singleton del servizio
export const geminiChatService = new GeminiChatService();
