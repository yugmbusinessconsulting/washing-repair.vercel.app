import { NextRequest, NextResponse } from "next/server";

// Paste your Google Apps Script Web App URL here after deployment
const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, brand, issue } = body;

    // Basic validation
    if (!name || !phone || !brand) {
      return NextResponse.json(
        { error: "Name, phone and brand are required." },
        { status: 400 }
      );
    }

    if (!APPS_SCRIPT_URL) {
      return NextResponse.json(
        { error: "Server configuration error: Apps Script URL not set." },
        { status: 500 }
      );
    }

    // Forward to Google Apps Script
    const scriptRes = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        brand,
        issue: issue || "—",
        submittedAt: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      }),
    });

    if (!scriptRes.ok) {
      throw new Error(`Apps Script responded with ${scriptRes.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to submit. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
