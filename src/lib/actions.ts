"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function post(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const { error } = await resend.emails.send({
      from: "aziabay.com <form@contact.aziabay.com>",
      to: ["aziabayasen@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
    });

    if (error) {
      return { success: false, error: error.message };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    
    return { success: false, error: "An unknown error occurred" };
  }

  return { success: true };
}
