import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstname = String(formData.get("firstname") || "");
    const lastname = String(formData.get("lastname") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Message",
      text: `
New contact form submission:

Name: ${firstname} ${lastname}
Phone: ${phone}
Email: ${email}

Message:
${message}
      `,
    });

    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response("Failed to submit form", { status: 500 });
  }
}