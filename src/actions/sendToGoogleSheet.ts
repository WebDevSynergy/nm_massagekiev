import { FieldValues } from 'react-hook-form';

export const sendToGoogleSheet = async (data: FieldValues) => {
  try {
    const updatedData = { ...data, createdAt: new Date().toLocaleString() };

    const res = await fetch('/api/google-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (res.status !== 200) throw new Error();
  } catch (e) {
    throw new Error();
  }
};
