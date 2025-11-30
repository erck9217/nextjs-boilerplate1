import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { mensaje } = await req.json();
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "API Key no configurada" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(mensaje);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ respuesta: text });
    } catch (error) {
        console.error("Error en chatbot:", error);
        return NextResponse.json(
            { error: `Error al procesar la solicitud: ${error instanceof Error ? error.message : String(error)}` },
            { status: 500 }
        );
    }
}
