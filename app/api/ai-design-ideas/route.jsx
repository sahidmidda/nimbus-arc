import { AiDesignIdeaChatSession } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { prompt } = await req.json();

    try {
        const result = await AiDesignIdeaChatSession.sendMessage(prompt);
        // console.log(result.response.text());
        return NextResponse.json(JSON.parse(result.response.text()));
    } catch (e) {
        return NextResponse.json({ error: e })
    }

}