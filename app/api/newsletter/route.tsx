import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Send newsletter subscription email
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MaternoNest <noreply@maternonest.com>",
        to: ["info@maternonest.com"],
        subject: "New Newsletter Subscription",
        text: `New newsletter subscription from: ${email}`,
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending newsletter subscription:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
