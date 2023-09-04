import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.gRecaptchaToken}`,
    });
    const reCaptchaRes = await res.json();

    return NextResponse.json(
      {
        status: "failure",
        message: "Error submitting the enquiry form",
      },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "failure",
        message: "Error submitting the enquiry form",
      },
      { status: 422 }
    );
  }
}
