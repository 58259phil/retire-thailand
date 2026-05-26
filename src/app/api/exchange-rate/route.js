// app/api/exchange-rate/route.js
// Fetches live THB rates for all supported currencies

export async function GET() {
  try {
    // Fetch THB as base to get all rates relative to THB
    const response = await fetch(
      'https://api.exchangerate-api.com/v4/latest/THB',
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Exchange rate API failed');
    }

    const data = await response.json();
    const rates = data.rates;

    if (!rates?.AUD) {
      throw new Error('Rates not found');
    }

    // Convert to THB per unit of each currency
    const thbPerAUD = 1 / rates.AUD;
    const thbPerUSD = 1 / rates.USD;
    const thbPerGBP = 1 / rates.GBP;
    const thbPerEUR = 1 / rates.EUR;
    const thbPerCAD = 1 / rates.CAD;
    const thbPerDKK = 1 / rates.DKK;
    const thbPerSGD = 1 / rates.SGD;
    const thbPerZAR = 1 / rates.ZAR;
    const thbPerSEK = 1 / rates.SEK;

    const allRates = {
      AUD: parseFloat(thbPerAUD.toFixed(4)),
      USD: parseFloat(thbPerUSD.toFixed(4)),
      GBP: parseFloat(thbPerGBP.toFixed(4)),
      EUR: parseFloat(thbPerEUR.toFixed(4)),
      CAD: parseFloat(thbPerCAD.toFixed(4)),
      DKK: parseFloat(thbPerDKK.toFixed(4)),
      SGD: parseFloat(thbPerSGD.toFixed(4)),
      ZAR: parseFloat(thbPerZAR.toFixed(4)),
      SEK: parseFloat(thbPerSEK.toFixed(4)),
    };

    return Response.json({
      rate: allRates.AUD,
      base: 'AUD',
      target: 'THB',
      allRates,
      timestamp: data.time_last_updated || Date.now(),
      source: 'exchangerate-api.com',
    });
  } catch (error) {
    console.error('Exchange rate fetch failed:', error);
    // Fallback approximate rates
    return Response.json({
      rate: 22.0,
      base: 'AUD',
      target: 'THB',
      allRates: {
        AUD: 22.0,
        USD: 33.5,
        GBP: 42.5,
        EUR: 36.0,
        CAD: 24.5,
        DKK: 4.8,
        SGD: 25.0,
        ZAR: 1.8,
        SEK: 3.1,
      },
      timestamp: Date.now(),
      source: 'fallback',
      error: 'Using approximate rates - live rates unavailable',
    });
  }
}
