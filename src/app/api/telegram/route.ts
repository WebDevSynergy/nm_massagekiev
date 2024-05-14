import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const { TG_TOKEN, TG_METHOD, TG_URL, TG_CHAT_ID } = process.env;

  const BASE_URL = `${TG_URL}/bot${TG_TOKEN}/${TG_METHOD}`;

  const msg = await req.json();

  const payload = { parse_mode: 'html', chat_id: TG_CHAT_ID, text: msg };

  try {
    await fetch(BASE_URL, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
