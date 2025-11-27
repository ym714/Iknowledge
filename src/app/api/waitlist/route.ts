import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        try {
            // 1. Send Welcome Email to the user
            await resend.emails.send({
                from: "Iknowledge <onboarding@resend.dev>",
                to: email,
                subject: "Welcome to Iknowledge",
                html: `
                    <div style="font-family: serif; color: #111;">
                        <h1 style="font-size: 24px; margin-bottom: 16px;">Welcome to Iknowledge</h1>
                        <p style="font-family: sans-serif; color: #555; font-size: 16px; line-height: 1.5;">
                            You have been added to the waitlist. We will notify you when we launch.
                        </p>
                    </div>
                `,
            });

            // 2. Add to Resend Audience (if Audience ID is configured)
            const audienceId = process.env.RESEND_AUDIENCE_ID;
            console.log("Audience ID:", audienceId); // DEBUG

            if (audienceId) {
                try {
                    const contactResult = await resend.contacts.create({
                        email: email,
                        audienceId: audienceId,
                    });
                    console.log("Contact creation result:", contactResult); // DEBUG
                } catch (error) {
                    console.error("Failed to add contact:", error);
                }
            } else {
                console.warn("RESEND_AUDIENCE_ID is not defined");
            }

            // 3. Send Notification Email to Admin (You)
            await resend.emails.send({
                from: "Iknowledge Bot <onboarding@resend.dev>",
                to: "delivered@resend.dev", // Change this to your actual email in production
                subject: "New Waitlist Signup",
                html: `<p>New user joined: <strong>${email}</strong></p>`,
            });

            return NextResponse.json({ success: true });
        } catch (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }
    } catch (error) {
        console.error("Request error:", error);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
