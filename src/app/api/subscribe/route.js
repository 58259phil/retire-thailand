import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, name } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const firstName = name || 'there';

    // Step 1 — Get the audience ID dynamically
    const audiencesRes = await fetch('https://api.resend.com/audiences', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    const audiencesData = await audiencesRes.json();

    if (!audiencesRes.ok || !audiencesData.data || audiencesData.data.length === 0) {
      return NextResponse.json(
        { error: 'No audience found in Resend account' },
        { status: 500 }
      );
    }

    const audienceId = audiencesData.data[0].id;

    // Step 2 — Add contact to audience
    const contactRes = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          first_name: name || '',
          subscribed: true,
        }),
      }
    );

    const contactData = await contactRes.json();

    if (!contactRes.ok) {
      return NextResponse.json(
        { error: contactData.message || 'Failed to subscribe' },
        { status: 500 }
      );
    }

    // Step 3 — Send welcome email
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Retire Thailand <hello@retirethailand.net>',
        reply_to: 'mail.retirethailand@gmail.com',
        to: [email],
        subject: 'Welcome to Retire Thailand 🇹🇭',
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0F0A04;font-family:'Helvetica Neue',Arial,sans-serif;">
<div style="max-width:580px;margin:0 auto;background:#0F0A04;">

  <div style="height:4px;background:linear-gradient(90deg,#0F0A04 0%,#C9963A 20%,#FFD87A 50%,#C9963A 80%,#0F0A04 100%);"></div>

  <div style="padding:40px 40px 32px;text-align:center;border-bottom:1px solid rgba(201,150,58,0.2);">
    <div style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#F5EDD8;margin-bottom:4px;">
      Retire <span style="color:#C9963A;">Thailand</span>
    </div>
    <div style="font-size:12px;color:#5A4030;letter-spacing:0.1em;text-transform:uppercase;">
      For Australians Retiring in the Land of Smiles
    </div>
  </div>

  <div style="padding:40px;">
    <p style="font-family:Georgia,serif;font-size:22px;color:#F5EDD8;margin:0 0 16px;">G'day ${firstName} 👋</p>

    <p style="font-size:15px;color:#A08060;line-height:1.75;margin:0 0 20px;">
      Welcome to the Retire Thailand newsletter. You're now part of a growing community of Australians planning — or already living — their retirement in Thailand.
    </p>

    <p style="font-size:15px;color:#A08060;line-height:1.75;margin:0 0 16px;">Each month I'll send you:</p>

    <div style="background:#160E05;border:1px solid rgba(201,150,58,0.2);border-radius:4px;padding:20px 24px;margin:0 0 24px;">
      <div style="margin-bottom:10px;font-size:14px;color:#A08060;line-height:1.6;">
        <span style="color:#C9963A;margin-right:10px;">✓</span><strong style="color:#F5EDD8;">Pension rate updates</strong> — whenever Centrelink adjusts the Age Pension
      </div>
      <div style="margin-bottom:10px;font-size:14px;color:#A08060;line-height:1.6;">
        <span style="color:#C9963A;margin-right:10px;">✓</span><strong style="color:#F5EDD8;">Thai visa news</strong> — rule changes and what's actually happening on the ground
      </div>
      <div style="margin-bottom:10px;font-size:14px;color:#A08060;line-height:1.6;">
        <span style="color:#C9963A;margin-right:10px;">✓</span><strong style="color:#F5EDD8;">Cost of living updates</strong> — real numbers from expats living there now
      </div>
      <div style="font-size:14px;color:#A08060;line-height:1.6;">
        <span style="color:#C9963A;margin-right:10px;">✓</span><strong style="color:#F5EDD8;">Honest advice</strong> — I lived in Hua Hin for 8 years. No fluff.
      </div>
    </div>

    <p style="font-size:15px;color:#A08060;line-height:1.75;margin:0 0 28px;">
      In the meantime — have you tried the pension calculator? It shows you exactly how far your Age Pension goes in 7 Thai cities, side by side.
    </p>

    <div style="text-align:center;margin:0 0 32px;">
      <a href="https://www.retirethailand.net" style="display:inline-block;background:#C9963A;color:#0F0A04;font-size:14px;font-weight:700;padding:14px 32px;border-radius:3px;text-decoration:none;">
        Try the Pension Calculator →
      </a>
    </div>

    <p style="font-size:14px;color:#5A4030;line-height:1.7;margin:0;">
      Questions? Just reply to this email — it comes straight to me.
    </p>
    <p style="font-size:14px;color:#5A4030;margin:16px 0 0;">
      Cheers,<br><strong style="color:#A08060;">Phil</strong><br>
      <span style="font-size:12px;">Founder, Retire Thailand</span>
    </p>
  </div>

  <div style="padding:20px 40px;border-top:1px solid rgba(201,150,58,0.1);text-align:center;">
    <p style="font-size:11px;color:#3A2810;margin:0;line-height:1.6;">
      You're receiving this because you signed up at retirethailand.net.<br>
      <a href="https://www.retirethailand.net" style="color:#5A4030;">Visit the site</a> · No spam. Unsubscribe anytime by replying "unsubscribe".
    </p>
  </div>

  <div style="height:3px;background:linear-gradient(90deg,#0F0A04 0%,#C9963A 20%,#FFD87A 50%,#C9963A 80%,#0F0A04 100%);"></div>

</div>
</body>
</html>`,
      }),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
