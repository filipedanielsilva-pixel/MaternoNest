import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MaternoNest <onboarding@resend.dev>",
        to: ["info@maternonest.com"],
        subject: "New Newsletter Subscription",
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
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
    console.error("Error sending newsletter subscription:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
