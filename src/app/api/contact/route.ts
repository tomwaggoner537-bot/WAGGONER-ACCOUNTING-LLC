import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,     // your Gmail address
        pass: process.env.GMAIL_APP_PASS, // Gmail App Password (not your login password)
      },
    });

    await transporter.sendMail({
      from: `"Waggoner Website" <${process.env.GMAIL_USER}>`,
      to: "tom@waggoneraccountingllc.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #00A680; border-bottom: 2px solid #00A680; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 140px;">Full Name:</td>
              <td style="padding: 10px 0; color: #222;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px 0; color: #222;">
                <a href="mailto:${email}" style="color: #00A680;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 10px 0; color: #222;">
                <a href="tel:${phone}" style="color: #00A680;">${phone}</a>
              </td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 10px 0; color: #222;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #222; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Sent from Waggoner Accounting LLC website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}