import { GoogleGenAI, Type } from "@google/genai";
import { AIConceptResponse } from "../types";

const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing. AI features will use mock data or fail.");
    // In a real scenario, we might throw, but for demo stability we return null or handle gracefully
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateExecutiveConcept = async (
  industry: string,
  style: string,
  goals: string
): Promise<AIConceptResponse> => {
  const ai = getAIClient();
  
  const prompt = `
    あなたは超富裕層エグゼクティブ向けのプレミアムブランドコンサルタントです。
    クライアントのために「AIデジタルツイン（AI化された自分）」または「エグゼクティブ・パーソナルブランド」のコンセプトを作成してください。
    
    クライアント詳細:
    - 業界/背景: ${industry}
    - リーダーシップスタイル: ${style}
    - 戦略的ゴール: ${goals}

    洗練され、モダンで、先見性のあるコンセプトを提案してください。
    出力は日本語のJSON形式で行ってください。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptTitle: { type: Type.STRING, description: "コンセプトのタイトル（短く魅力的に）" },
            tagline: { type: Type.STRING, description: "キャッチコピー" },
            executiveSummary: { type: Type.STRING, description: "コンセプトの概要説明" },
            keyFeatures: { 
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "主な特徴3つ"
            }
          },
          required: ["conceptTitle", "tagline", "executiveSummary", "keyFeatures"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIConceptResponse;
    }
    throw new Error("No response text generated");

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback for demo purposes if API fails or key is missing (Japanese)
    return {
      conceptTitle: "The Sovereign Intellect (至高の知性)",
      tagline: "リーダーシップを、永遠のものに。",
      executiveSummary: "物理的な制約を超えて影響力を拡張するために設計された特注のデジタルツイン。あなたの倫理的かつ戦略的な枠組みに基づいて、24時間365日、意思決定をサポートし、対外的なコミュニケーションを行います。",
      keyFeatures: [
        "24時間対応の戦略的意思決定サポート",
        "多言語音声合成によるグローバル発信",
        "レガシー（遺産）としての知識アーカイブ"
      ]
    };
  }
};