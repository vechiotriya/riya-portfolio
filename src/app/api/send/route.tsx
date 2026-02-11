import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/components/email-template";

const { RESEND_API_KEY } = process.env;
const resend = new Resend(RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  const emailComponent = (
    <EmailTemplate name={name} email={email} message={message} />
  );
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["vechiotriya@gmail.com"],
      subject: "A message from your portfolio ✨",
      react: emailComponent,
    });

    if (error) {
      console.error("FULL ERROR:", error);

      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("FL ERROR:", error);

    return Response.json({ error }, { status: 500 });
  }
}
