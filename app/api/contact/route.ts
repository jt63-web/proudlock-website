import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.enum(["commercial", "residential", "fitout", "interior-design", "other"]),
  message: z.string().min(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: wire up Resend (or another email provider)
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@proudlock.com.au",
    //   to: "info@proudlock.com.au",
    //   subject: `New enquiry from ${data.name}`,
    //   text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nType: ${data.projectType}\n\n${data.message}`,
    // });

    console.log("Contact form submission:", data);

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
