import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, dueDate, message } = body

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MaternoNest <onboarding@resend.dev>",
        to: ["delivered@resend.dev"],
        reply_to: email,
        subject: `New Contact Form Submission - ${service}`,
        html: `
          <h2>New Contact Form Submission from MaternoNest</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Due Date:</strong> ${dueDate || "Not provided"}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Resend API error:", errorData)
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
