import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";  

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

     
    const name = String(formData.get("name") || "");
    const fullName = String(formData.get("fullName") || "");
    const phonenumber = String(formData.get("phonenumber") || "");
    const email = String(formData.get("email") || "");
    const hereAbout = String(formData.get("hereAbout") || "");
    const linkedin = String(formData.get("linkedin") || "");
    const date = String(formData.get("date") || "");
    const message = String(formData.get("message") || "");

    // Get file
    const resumeFile = formData.get("resume") as File | null;

    let attachments: any[] = [];

    
    if (resumeFile && resumeFile.size > 0) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

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
      from: `"${name}" <${process.env.EMAIL_USER}>`, 
      replyTo: email, 
      to: process.env.EMAIL_RECEIVER,
      subject: "New Job Application",
      text: `
Name: ${name}
Full Name: ${fullName}
Phone: ${phonenumber}
Email: ${email}
Heard About: ${hereAbout}
LinkedIn: ${linkedin}
Available Date: ${date}

Message:
${message}
      `,
      attachments,
    });

    return new Response("Application submitted successfully", { status: 200 });

  } catch (error) {
    console.error("Email Error:", error);
    return new Response("Failed to submit application", { status: 500 });
  }
}