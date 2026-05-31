import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import { StickyAffiliateSidebar } from '@/components/AffiliateCard';

export const metadata = {
  alternates: {
    canonical: 'https://www.retirethailand.net/faq',
  },
  openGraph: {
    title: 'FAQ | Retiring in Thailand — Australian Questions Answered',
    description: 'Common questions Australians ask about retiring in Thailand.',
    url: 'https://www.retirethailand.net/faq',
    siteName: 'Retire Thailand',
    type: 'website',
    images: [{ url: '/temple.jpg', width: 1200, height: 630, alt: 'Retire Thailand' }],
  },
  title: 'FAQ | Retiring in Thailand — Australian Pension Questions Answered',
  description: 'Common questions Australians ask about retiring in Thailand. Pension portability, Medicare, visas, healthcare and tax — plain English answers.',
};

const faqs = [
  {
    category: "Australian Age Pension",
    questions: [
      {
        q: "Can I receive the Australian Age Pension while living in Thailand?",
        a: "Yes. You must claim the pension while physically in Australia — you need to be present on the day you lodge your claim. Once granted, for most long-term Australians there is no mandatory waiting period. See our [full pension guide](/blog/australian-pension-thailand) before you can move overseas. Your pension is paid to you in Thailand indefinitely. From 20 September 2026, after 12 weeks abroad the Pension Supplement stops entirely. After 26 weeks your rate may be recalculated based on your years of Australian residency. If moving permanently, the supplement stops immediately on departure. Always confirm your specific situation with Centrelink International Services on 131 673 before making plans.",
      },
      {
        q: "What is the current Australian Age Pension rate in 2026?",
        a: "From 20 March 2026, the maximum single Age Pension is $1,200.90 per fortnight (approximately $600 per week). When living overseas long-term, you lose the energy supplement and the pension supplement drops to the basic rate, leaving you with roughly $540–$560 per week. Rates are updated every March and September. Use our [pension calculator](/) to see how far this goes in each Thai city.",
      },
      {
        q: "What age do I need to be to claim the Age Pension?",
        a: "The current Age Pension age is 67 for both men and women born after 1 January 1957. If you were born before that date, the qualifying age may be slightly lower. You cannot claim the pension before reaching this age regardless of where you live. Read our [guide to retiring in Thailand from Australia](/blog/retiring-in-thailand-from-australia).",
      },
      {
        q: "What are the residency requirements to claim the Age Pension?",
        a: "You must be physically present in Australia on the day you lodge your claim. You also need to have lived in Australia for at least 10 years total, with at least 5 of those years being continuous. For most Australians who have lived and worked here most of their lives, this is easily met. If you have lived overseas for a period, count up your total Australian residency — as long as it adds up to 10 years with a 5-year continuous stretch, you qualify. Read our [full pension portability guide](/blog/australian-pension-thailand).",
      },
      {
        q: "What is the two-year portability rule and does it apply to me?",
        a: "The two-year rule is often misunderstood. It only applies to former residents — people who lived overseas for an extended period, returned to Australia specifically to claim the pension, and then want to immediately leave again. It does not apply to Australians who have been living and working in Australia leading up to their retirement. If you have been residing in Australia for many years before claiming, you can move to Thailand after claiming without any mandatory waiting period. If you are unsure whether this rule applies to your situation, contact Centrelink International Services on 131 673. Read our [full pension portability guide](/blog/australian-pension-thailand).",
      },
      {
        q: "Will I get the full pension in Thailand or a reduced amount?",
        a: "It depends on your Australian Working Life Residency (AWLR) — the number of years you lived in Australia between ages 16 and 67. If you have 35 or more years, you generally receive the full overseas rate. If fewer than 35 years, your pension is calculated proportionally. For example, 28 years of Australian residency means you receive roughly 28/35ths of the full rate. If you spent time living overseas during your working life, add up your total Australian years carefully. Contact Centrelink International Services (phone 131 673 from overseas) to get an estimate. Use our [pension calculator](/) to model your budget. based on your specific history.",
      },
      {
        q: "What do I lose when I take my pension overseas?",
        a: "From 20 September 2026, the Pension Supplement continues for up to 12 weeks overseas. After 12 weeks it stops entirely. If you move permanently it stops immediately. You also lose access to the Pensioner Concession Card. Read our [full overseas pension guide](/blog/australian-pension-thailand) for details. benefits, rent assistance, and other Australian government concessions. The core pension payment continues, but the total amount will be somewhat lower than what you'd receive living in Australia.",
      },
      {
        q: "Can Centrelink pay my pension directly into a Thai bank account?",
        a: "Yes — Centrelink can pay your pension directly into a Thai bank account. However, be aware that the exchange rate and fees used by the banking system are generally poor. Most expats find it more cost-effective to have Centrelink pay into an Australian bank account and then transfer to Thailand themselves using a service like [Wise](/resources), which charges much lower fees. Read our [guide to sending your pension to Thailand](/blog/transfer-australian-pension-thailand) and uses mid-market exchange rates.",
      },
      {
        q: "Do I need to tell Centrelink if I move to Thailand permanently?",
        a: "Yes — you must notify Centrelink. Our [complete moving checklist](/blog/preparing-to-move-thailand-checklist) covers exactly what to do before you leave. if you leave Australia for more than 12 weeks, and definitely if you are relocating permanently. Failing to notify them can result in overpayments which you would need to repay. You can notify them online through myGov or by calling Centrelink International Services.",
      },
    ],
  },
  {
    category: "Thai Retirement Visa",
    questions: [
      {
        q: "What visa do I need to retire in Thailand?",
        a: "The most common option is the Non-Immigrant O-A Visa, known as the retirement visa. It's available to anyone aged 50 or over and is renewable annually. You need to show either 800,000 THB (around $36,000 AUD) in a Thai bank account, or a monthly income of 65,000 THB (around $2,950 AUD/month). Health insurance is mandatory for this visa. Read our [complete Thai retirement visa guide](/blog/thai-retirement-visa-australians).",
      },
      {
        q: "How much money do I need in a Thai bank account for the retirement visa?",
        a: "You need 800,000 THB (approximately $36,000 AUD at current rates) deposited in a Thai bank account. This money needs to have been in the account for at least 2–3 months before your application — you cannot simply deposit it the day before. Many retirees treat this as a dedicated visa fund. Read our guide to [opening a Thai bank account](/blog/opening-bank-account-thailand-australian). they keep separate from their spending money.",
      },
      {
        q: "Is health insurance compulsory for the Thai retirement visa?",
        a: "Yes — health insurance is mandatory. Read our [healthcare guide](/blog/medicare-thailand-australians) for recommended options. for the Non-Immigrant O-A retirement visa. Your policy must have at minimum 40,000 THB outpatient coverage and 400,000 THB inpatient coverage. Several Thai insurance companies offer plans specifically designed to meet these requirements at reasonable prices. For someone aged 60–70, expect to pay roughly 50,000–90,000 THB per year for a qualifying plan.",
      },
      {
        q: "Can I apply for the Thai retirement visa from Australia?",
        a: "Yes — you apply at the Royal Thai Embassy in Canberra, or Thai Consulates in Sydney or Melbourne. You will need your passport, proof of funds, health insurance certificate, police clearance certificate from the Australian Federal Police, and a medical certificate from a registered doctor. The process typically takes a few weeks. Read our [complete visa guide](/blog/thai-retirement-visa-australians) for step-by-step instructions.",
      },
      {
        q: "What is the 90-day reporting requirement?",
        a: "While living in Thailand on a long-term visa, you must report your address to Thai Immigration every 90 days. This is done by submitting a TM47 form — either online, by post, or in person at your local immigration office. If you leave Thailand and re-enter before your 90-day deadline, the clock resets. Missing the deadline incurs a fine of 2,000 THB. Read our [90-day reporting guide](/blog/90-day-reporting-thailand-guide) for full instructions. (about $90 AUD).",
      },
      {
        q: "What happens if I visit Australia during my retirement in Thailand?",
        a: "Short visits to Australia are fine. Read our [Australian pension portability guide](/blog/australian-pension-thailand) for how this affects your payments. are no problem — your Thai visa allows multiple re-entries. For your pension, visiting Australia has no negative effect on your payments. Regular trips home to see family are fine. Read our [Australian pension portability guide](/blog/australian-pension-thailand) for how this affects payments., attend medical appointments, or handle financial matters are completely compatible with living on the pension in Thailand.",
      },
    ],
  },
  {
    category: "Healthcare",
    questions: [
      {
        q: "What happens to my Medicare when I move to Thailand?",
        a: "Your Medicare card remains active, but it only works in Australia. Living in Thailand, you cannot use Medicare for Thai medical services. If you return to Australia for a visit and see a doctor or go to hospital, Medicare covers you as normal. This is why private health insurance is essential. Read our [full Medicare and healthcare guide](/blog/medicare-thailand-australians). for all Australian expats in Thailand.",
      },
      {
        q: "Is healthcare in Thailand good enough for retirees?",
        a: "Thailand has genuinely excellent private healthcare. Read our [full healthcare guide](/blog/medicare-thailand-australians) — particularly in Bangkok, Chiang Mai, Hua Hin, Pattaya and Khon Kaen. Private hospitals are modern, often internationally accredited, with English-speaking doctors many of whom trained overseas. Major Bangkok hospitals like Bumrungrad International are considered among the best in Asia. For most healthcare needs, Thai private hospitals are very good. Read our [complete healthcare guide](/blog/medicare-thailand-australians). For extremely complex or specialist procedures, some retirees prefer to fly home to Australia.",
      },
      {
        q: "How much does private health insurance cost in Thailand?",
        a: "For an Australian aged 60–70, expect to pay roughly 50,000–100,000 THB per year ($2,300–$4,500 AUD) for a plan that meets the retirement visa requirements and provides reasonable coverage. Costs increase with age and depend on the level of coverage and any pre-existing conditions. It is strongly recommended to get cover before leaving Australia. See our [recommended health insurance options](/resources)., as pre-existing conditions are often excluded from new policies.",
      },
      {
        q: "Should I get health insurance before I leave Australia?",
        a: "Yes — strongly recommended. Once you have a diagnosed condition, getting comprehensive cover for that condition becomes much harder or more expensive. If you get insured while healthy, many conditions that develop later will be covered. Waiting until after you arrive in Thailand and have had a health scare is the wrong time. See our [recommended providers](/resources). is the wrong time to shop for insurance.",
      },
    ],
  },
  {
    category: "Money and Tax",
    questions: [
      {
        q: "Do I have to pay tax in Thailand on my Australian pension?",
        a: "Thailand introduced new rules in 2024 requiring foreign residents to declare overseas income brought into Thailand during the same calendar year it was earned. This is a complex and evolving area — the rules changed recently and enforcement is still developing. Most Australian retirees are advised to speak with a Thai tax accountant. Read our [Australia-Thailand tax guide](/blog/australia-thailand-tax-retirees). about their specific situation. Australia and Thailand do not have a comprehensive double tax agreement, so the situation is not fully clear-cut for everyone.",
      },
      {
        q: "Do I still pay tax in Australia on my pension?",
        a: "The Australian Age Pension is taxable income in Australia. However, most retirees receiving only the pension will have little or no tax liability because the pension amount falls below the effective tax-free threshold when combined with senior and pensioner tax offsets. If you also have superannuation income or other earnings, your tax situation may differ. Consider speaking with an Australian accountant before you leave.",
      },
      {
        q: "What is the cheapest way to transfer my pension to Thailand?",
        a: "The cheapest method is to have Centrelink pay your pension into your Australian bank account, then transfer it to Thailand yourself using Wise. Wise charges roughly 0.4–0.6% with the mid-market exchange rate, compared to 2–4% margins charged by most Australian banks. On a full pension, this difference saves roughly $600–$900 AUD per year. See our full guide on transferring your pension to Thailand for step-by-step instructions.",
      },
      {
        q: "How much superannuation do I need to retire in Thailand?",
        a: "It depends on your age and lifestyle. If retiring at 67 on the full pension in a cheaper city like Khon Kaen, even $50,000–$100,000 in super provides a meaningful buffer. For a comfortable lifestyle in Hua Hin or Chiang Mai, $150,000–$250,000 alongside the pension works well. If retiring before 67 without the pension, you'll need $250,000–$400,000 to bridge the gap to pension age depending on your lifestyle costs.",
      },
    ],
  },
  {
    category: "Daily Life",
    questions: [
      {
        q: "Do I need to speak Thai to live in Thailand?",
        a: "No — you can get by without Thai, particularly in cities with large expat communities like Hua Hin, Chiang Mai, Pattaya and Bangkok. English is widely spoken in restaurants, hospitals, banks and landlord interactions in these areas. That said, learning even basic Thai phrases makes an enormous difference to how you're received and how much you enjoy daily life. Thais genuinely appreciate foreigners who make the effort.",
      },
      {
        q: "Is Thailand safe for retirees?",
        a: "Thailand is generally very safe for retirees. Read our [guide to safety in Thailand](/blog/retiring-in-thailand-from-australia) for more detail. for foreign retirees. Violent crime against foreigners is rare. The main risks are everyday ones — motorbike accidents (a genuine concern, take care on roads), petty theft in tourist areas, and scams targeting tourists. Retirees who settle into a city and live like locals rather than tourists generally have very few safety concerns.",
      },
      {
        q: "Can I drive in Thailand on my Australian licence?",
        a: "You can drive in Thailand on your Australian licence for up to 90 days. Read our [getting around Thailand guide](/blog/getting-around-thailand-retirees) for full details. For longer-term residence, you should get a Thai driving licence. The process involves a medical certificate, vision test, and written test (available in English) at your local Land Transport Office. Many expats find it straightforward.",
      },
      {
        q: "What is the cost of living in Thailand compared to Australia?",
        a: "Generally speaking, a comfortable lifestyle in Thailand costs roughly 40% less. Use our [pension calculator](/) to compare costs across 7 Thai cities side by side. In Thailand costs roughly 40–60% of what an equivalent lifestyle costs in a major Australian city. Rent is dramatically cheaper — a modern one-bedroom condo with pool in Chiang Mai or Khon Kaen rents for $400–$550 AUD/month versus $2,000+ in Brisbane. Food, healthcare, transport and entertainment are all significantly cheaper. The main exception is imported Western goods, which can cost more than in Australia.",
      },
      {
        q: "Can I buy property in Thailand as an Australian?",
        a: "Foreigners cannot own land in Thailand. Read our [complete renting guide](/blog/renting-condo-thailand-guide) for your best options., but can own condominium units (apartments) in their own name — provided foreign ownership in that building does not exceed 49%. Many Australian retirees rent rather than buy, which gives flexibility without the legal complexities of property ownership. If you want to buy a house, it can be done through a long-term lease arrangement, though this involves legal complexity and is worth getting professional advice on.",
      },
      {
        q: "How do I make friends and build a social life in Thailand?",
        a: "Most cities with significant expat populations have active social clubs. Read our [guide to making friends in Thailand](/blog/making-friends-retiring-thailand)., golf groups, Hash House Harriers running/walking clubs, and regular expat meetups. The Hua Hin Expats Club, Chiang Mai Expats Club and Pattaya Expats Club all have decades of history and weekly events that welcome newcomers. Facebook groups for your chosen city are also very active. The expat community in Thailand is generally welcoming — the key is to put yourself out there in the first few months rather than waiting for friendships to come to you.",
      },
    ],
  },
];


const card = { background: 'rgba(20,13,4,0.82)', border: '1px solid rgba(201,150,58,0.25)', borderRadius: '4px', backdropFilter: 'blur(6px)' };

const DiamondDivider = () => (
  <div style={{ background: '#0F0A04', overflow: 'hidden' }}>
    <svg width="100%" height="24" viewBox="0 0 680 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="24" fill="#0F0A04"/>
      <line x1="0" y1="3" x2="680" y2="3" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
      <line x1="0" y1="21" x2="680" y2="21" stroke="#C9963A" strokeWidth="0.5" opacity="0.25"/>
      <g fill="#C9963A" opacity="0.4">
        {[20,58,96,134,172,210,248,286,324,362,400,438,476,514,552,590,628,666].map(x => (
          <polygon key={x} points={`${x},12 ${x+7},6 ${x+14},12 ${x+7},18`}/>
        ))}
      </g>
    </svg>
  </div>
);

export default function FAQPage() {
  return (
    <main style={{
      position: 'relative', minHeight: '100vh',
      backgroundImage: 'url(/temple.jpg)',
      backgroundSize: '120%', backgroundPosition: 'center 20%', backgroundAttachment: 'scroll',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,6,2,0.58) 0%, rgba(15,10,4,0.52) 50%, rgba(10,6,2,0.58) 100%)', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Gold bar */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #0F0A04 0%, #C9963A 20%, #FFD87A 50%, #C9963A 80%, #0F0A04 100%)' }} />

        {/* Dark header */}
        <div style={{ background: '#0F0A04', padding: '72px 40px 48px', textAlign: 'center', borderBottom: '1px solid rgba(201,150,58,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9963A' }}>Questions & Answers</span>
            <div style={{ width: '40px', height: '1px', background: '#C9963A', opacity: 0.5 }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#F5EDD8', marginBottom: '14px', lineHeight: 1.15 }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '15px', color: '#7A6040', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Plain English answers to the most common questions about retiring in Thailand as an Australian.
          </p>
        </div>

        <DiamondDivider />

        {/* Content */}
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 40px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', alignItems: 'start' }} className="blog-article-grid">

            {/* Sticky sidebar */}
            <StickyAffiliateSidebar context="default" />

            {/* FAQ content */}
            <div>
          <div style={{ ...card, padding: '20px 24px', marginBottom: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9963A', marginBottom: '14px' }}>Jump to a section</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {faqs.map((section) => (
                <a key={section.category} href={`#${section.category.toLowerCase().replace(/ /g, '-')}`} style={{
                  fontSize: '12px', padding: '5px 14px',
                  border: '1px solid rgba(201,150,58,0.25)',
                  borderRadius: '2px', color: '#7A6040',
                  textDecoration: 'none',
                }}>
                  {section.category}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Sections */}
          {faqs.map((section) => (
            <div key={section.category} id={section.category.toLowerCase().replace(/ /g, '-')} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#F5EDD8', marginBottom: '16px' }}>
                {section.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {section.questions.map((item, i) => (
                  <details key={i} style={{ ...card, overflow: 'hidden' }}>
                    <summary style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '16px 20px', cursor: 'pointer', listStyle: 'none',
                      color: '#F5EDD8', fontSize: '14px', fontWeight: 500,
                    }}>
                      <span style={{ paddingRight: '16px' }}>{item.q}</span>
                      <span style={{
                        flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(201,150,58,0.15)', color: '#C9963A',
                        fontSize: '16px', fontWeight: 400, border: '1px solid rgba(201,150,58,0.3)',
                      }}>+</span>
                    </summary>
                    <div style={{ padding: '0 20px 16px', fontSize: '14px', lineHeight: 1.75, color: '#7A6040', borderTop: '1px solid rgba(201,150,58,0.12)', paddingTop: '14px', marginTop: '0' }}>
                      <p style={{ paddingTop: '14px' }}>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <NewsletterSignup variant="inline" />

          {/* Disclaimer */}
          <div style={{ ...card, padding: '18px 22px', marginTop: '16px', borderLeft: '3px solid rgba(201,150,58,0.4)', borderRadius: '0 4px 4px 0', fontSize: '13px', color: '#5A4030', lineHeight: 1.7 }}>
            <strong style={{ color: '#7A6040' }}>Disclaimer:</strong> The information on this page is general in nature and does not constitute financial, legal or tax advice. Pension rules, visa requirements and tax laws change regularly. Always verify current information with Centrelink (servicesaustralia.gov.au), the Thai Embassy, and a qualified adviser before making decisions. Contact Centrelink International Services on 131 673 to confirm your specific entitlements.
          </div>

          {/* CTA cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '24px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={{ ...card, padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>🧮</div>
                <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', color: '#F5EDD8', marginBottom: '6px' }}>Pension Calculator</div>
                <div style={{ fontSize: '13px', color: '#7A6040' }}>See exactly how far your pension goes in each Thai city</div>
              </div>
            </Link>
            <Link href="/blog" style={{ textDecoration: 'none' }}>
              <div style={{ ...card, padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>📖</div>
                <div style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '18px', color: '#F5EDD8', marginBottom: '6px' }}>Retirement Guides</div>
                <div style={{ fontSize: '13px', color: '#7A6040' }}>In-depth articles on visas, money, healthcare and daily life</div>
              </div>
            </Link>
          </div>

            </div>
          </div>
        </div>

        <DiamondDivider />
        <div style={{ background: '#0F0A04', textAlign: 'center', padding: '48px 40px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9963A', color: '#0F0A04', fontSize: '14px', fontWeight: 600, padding: '13px 28px', borderRadius: '3px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0A04" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Pension Calculator
          </Link>
        </div>

      </div>
    </main>
  );
}
