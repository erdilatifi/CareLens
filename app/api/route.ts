import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { messages } = await req.json();
    const ollamaUrl: string = process.env.OLLAMA!;

    const askOllama = await fetch(ollamaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "phi3:mini",
        messages: [
          {
            role: "system",
            content:
              "You are a medical expert. Given symptoms, do the following: " +
              "1) Give brief advice to relieve pain. " +
              "2) Suggest the appropriate doctor type. " +
              "Respond in under 20 words.",
          },
          {
            role: "user",
            content: `Symptoms: ${messages.content}`,
          },
        ],
        stream: false,
      }),
    });

    if (!askOllama.ok) {
      return NextResponse.json(
        { reply: "Error fetching response from Ollama API." },
        { status: 502 }
      );
    }

    const data = await askOllama.json();
    return NextResponse.json({
      reply: data.message?.content || "No response from Ollama!",
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { reply: "Internal server error." },
      { status: 500 }
    );
  }
};
