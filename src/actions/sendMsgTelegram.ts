export const sendMsgTelegram = async (msg: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${BASE_URL}/api/telegram`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(msg),
  });

  return await res.json();
};
