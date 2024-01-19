import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email, 'parimala.katasani@gmail.com'],
      subject: "PARIMALA KATASANI",
      react: (
        <>
          <h2>Appreciate your Interest!</h2>
          {/* <h1>{subject}</h1> */}
          <h3>Dear {email},</h3>
          <p>Thank you for reaching out and expressing interest in my skills.
             I&#39;m thrilled about the opportunity to discuss how we can collaborate. 
             Looking forward to connecting soon.
          </p>
          <p>Best regards,</p>
          <p>Parimala Katasani</p>

          <h2>____________________________________________________________</h2>
          <p>Your subject:</p>
          <p>{subject}</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
