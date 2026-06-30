import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.enum(["commercial", "residential", "fitout", "interior-design", "other"]),
  message: z.string().min(20),
});

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "cris@proudlock.com.au";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

const projectTypeLabel: Record<string, string> = {
  commercial: "Commercial Construction",
  residential: "Residential Construction",
  fitout: "Fitout",
  "interior-design": "Interior Design",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const { error } = await resend.emails.send({
      from: `Proudlock Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New enquiry — ${projectTypeLabel[data.projectType]} — ${data.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#0E0F11;">
          <h2 style="margin-bottom:24px;color:#3A5248;">New website enquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;width:140px;color:#888;font-size:13px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;">
                <a href="mailto:${data.email}">${data.email}</a>
              </td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;">${data.phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px;">Project type</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;">${projectTypeLabel[data.projectType]}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Message</td>
              <td style="padding:10px 0;font-size:14px;line-height:1.6;">${data.message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <p style="margin-top:32px;font-size:12px;color:#aaa;">Sent from proudlock.com.au contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
