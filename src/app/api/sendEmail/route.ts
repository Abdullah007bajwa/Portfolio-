import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }
    
    // Create a transporter using Mailjet SMTP settings
    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587, // or try 25 if necessary; for SSL use 465 with secure: true
      secure: false,
      auth: {
        user: process.env.MAILJET_API_KEY,
        pass: process.env.MAILJET_API_SECRET,
      },
    });

    // Use a verified sender address for "from"
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_TO}>`, // Verified sender address
      to: process.env.EMAIL_TO, // Recipient address
      subject: "New Message from Contact Form",
      text: `Sender: ${email}\n\n${message}`,
      html: `<p><strong>Sender:</strong> ${email}</p><p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error: unknown) {
    console.error("Email send error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
