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

    // Step 1 — Get the audience ID dynamically
    const audiencesRes = await fetch('https://api.resend.com/audiences', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    const audiencesData = await audiencesRes.json();
    console.log('Audiences response:', JSON.stringify(audiencesData));

    if (!audiencesRes.ok || !audiencesData.data || audiencesData.data.length === 0) {
      return NextResponse.json(
        { error: 'No audience found in Resend account' },
        { status: 500 }
      );
    }

    // Use the first audience
    const audienceId = audiencesData.data[0].id;
    console.log('Using audience ID:', audienceId);

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
    console.log('Contact response:', JSON.stringify(contactData));

    if (!contactRes.ok) {
      return NextResponse.json(
        { error: contactData.message || 'Failed to subscribe' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
