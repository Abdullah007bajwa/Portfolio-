import Together from "together-ai";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    console.log("Incoming payload:", payload);

    let inputText = "";
    if (payload.input) {
      inputText = payload.input;
    } else if (payload.messages && Array.isArray(payload.messages) && payload.messages.length > 0) {
      inputText = payload.messages[payload.messages.length - 1].content;
    } else {
      return new Response(
        JSON.stringify({ error: "No input provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Explicitly pass your API key from the environment variable.
    const together = new Together({ apiKey: process.env.TOGETHER_API_TOKEN });

    const responseStream = await together.chat.completions.create({
      messages: [
        {
          role: "user",
          content: inputText,
        },
      ],
      model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
      max_tokens: undefined,
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stop: ["<｜end▁of▁sentence｜>"],
      stream: true,
    });

    let out = "";
    for await (const token of responseStream) {
      if (token.choices && token.choices.length > 0) {
        const newContent = token.choices[0]?.delta?.content;
        out += newContent;
        console.log(newContent);
      }
    }
    out = out.replace(/<\/?think>/g, '');
    return new Response(
      JSON.stringify({ completion: out }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
