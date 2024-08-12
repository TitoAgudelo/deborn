import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, phone, email, company, message } =
      await request.json();

    const { data, error } = await resend.emails.send({
      from: "no_reply@debornconstruction.com",
      to: "debornconstruction@verizon.net",
      subject: "New Contact Form Submission Deborn",
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Company:</strong> ${company}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
