// app/api/exchange-rate/route.js
// Fetches live AUD/THB exchange rate
// Uses a free API - no key needed for basic rates

export async function GET() {
  try {
    // Using exchangerate-api.com free tier (no key needed for this endpoint)
    const response = await fetch(
      'https://api.exchangerate-api.com/v4/latest/AUD',
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Exchange rate API failed');
    }

    const data = await response.json();
    const thbRate = data.rates?.THB;

    if (!thbRate) {
      throw new Error('THB rate not found');
    }

    return Response.json({
      rate: thbRate,
      base: 'AUD',
      target: 'THB',
      timestamp: data.time_last_updated || Date.now(),
      source: 'exchangerate-api.com',
    });
  } catch (error) {
    // Fallback to approximate rate if API fails
    console.error('Exchange rate fetch failed:', error);
    return Response.json({
      rate: 22.0,
      base: 'AUD',
      target: 'THB',
      timestamp: Date.now(),
      source: 'fallback',
      error: 'Using approximate rate - live rate unavailable',
    });
  }
}
