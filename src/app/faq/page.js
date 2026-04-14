import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Retiring in Thailand — Australian Pension Questions Answered',
  description: 'Answers to the most common questions Australians ask about retiring in Thailand. Pension portability, Medicare, visas, healthcare, tax and more — plain English answers.',
};

const faqs = [
  {
    category: "Australian Age Pension",
    questions: [
      {
        q: "Can I receive the Australian Age Pension while living in Thailand?",
        a: "Yes. You must claim the pension while physically in Australia — you need to be present on the day you lodge your claim. Once granted, for most long-term Australians there is no mandatory waiting period before you can move overseas. Your pension is paid to you in Thailand indefinitely. After 6 weeks abroad your supplements reduce slightly, and after 26 weeks your rate may be recalculated based on your years of Australian residency. Always confirm your specific situation with Centrelink International Services on 131 673 before making plans.",
      },
      {
        q: "What is the current Australian Age Pension rate in 2026?",
        a: "From 20 March 2026, the maximum single Age Pension is $1,200.90 per fortnight (approximately $600 per week). When living overseas long-term, you lose the energy supplement and the pension supplement drops to the basic rate, leaving you with roughly $540–$560 per week. Rates are updated every March and September — always check the current rate at servicesaustralia.gov.au.",
      },
      {
        q: "What age do I need to be to claim the Age Pension?",
        a: "The current Age Pension age is 67 for both men and women born after 1 January 1957. If you were born before that date, the qualifying age may be slightly lower. You cannot claim the pension before reaching this age regardless of where you live.",
      },
      {
        q: "What are the residency requirements to claim the Age Pension?",
        a: "You must be physically present in Australia on the day you lodge your claim. You also need to have lived in Australia for at least 10 years total, with at least 5 of those years being continuous. For most Australians who have lived and worked here most of their lives, this is easily met. If you have lived overseas for a period, count up your total Australian residency — as long as it adds up to 10 years with a 5-year continuous stretch, you qualify.",
      },
      {
        q: "What is the two-year portability rule and does it apply to me?",
        a: "The two-year rule is often misunderstood. It only applies to former residents — people who lived overseas for an extended period, returned to Australia specifically to claim the pension, and then want to immediately leave again. It does not apply to Australians who have been living and working in Australia leading up to their retirement. If you have been residing in Australia for many years before claiming, you can move to Thailand after claiming without any mandatory waiting period. If you are unsure whether this rule applies to your situation, contact Centrelink International Services on 131 673.",
      },
      {
        q: "Will I get the full pension in Thailand or a reduced amount?",
        a: "It depends on your Australian Working Life Residency (AWLR) — the number of years you lived in Australia between ages 16 and 67. If you have 35 or more years, you generally receive the full overseas rate. If fewer than 35 years, your pension is calculated proportionally. For example, 28 years of Australian residency means you receive roughly 28/35ths of the full rate. If you spent time living overseas during your working life, add up your total Australian years carefully. Contact Centrelink International Services (phone 131 673 from overseas) to get an estimate based on your specific history.",
      },
      {
        q: "What do I lose when I take my pension overseas?",
        a: "After 6 weeks outside Australia, you lose the energy supplement. The pension supplement drops to the basic rate only. You also lose access to the Pensioner Concession Card benefits, rent assistance, and other Australian government concessions. The core pension payment continues, but the total amount will be somewhat lower than what you'd receive living in Australia.",
      },
      {
        q: "Can Centrelink pay my pension directly into a Thai bank account?",
        a: "Yes — Centrelink can pay your pension directly into a Thai bank account. However, be aware that the exchange rate and fees used by the banking system are generally poor. Most expats find it more cost-effective to have Centrelink pay into an Australian bank account and then transfer to Thailand themselves using a service like Wise, which charges much lower fees and uses mid-market exchange rates.",
      },
      {
        q: "Do I need to tell Centrelink if I move to Thailand permanently?",
        a: "Yes — you must notify Centrelink if you leave Australia for more than 6 weeks, and definitely if you are relocating permanently. Failing to notify them can result in overpayments which you would need to repay. You can notify them online through myGov or by calling Centrelink International Services.",
      },
    ],
  },
  {
    category: "Thai Retirement Visa",
    questions: [
      {
        q: "What visa do I need to retire in Thailand?",
        a: "The most common option is the Non-Immigrant O-A Visa, known as the retirement visa. It's available to anyone aged 50 or over and is renewable annually. You need to show either 800,000 THB (around $36,000 AUD) in a Thai bank account, or a monthly income of 65,000 THB (around $2,950 AUD/month). Health insurance is mandatory for this visa.",
      },
      {
        q: "How much money do I need in a Thai bank account for the retirement visa?",
        a: "You need 800,000 THB (approximately $36,000 AUD at current rates) deposited in a Thai bank account. This money needs to have been in the account for at least 2–3 months before your application — you cannot simply deposit it the day before. Many retirees treat this as a dedicated visa fund they keep separate from their spending money.",
      },
      {
        q: "Is health insurance compulsory for the Thai retirement visa?",
        a: "Yes — health insurance is mandatory for the Non-Immigrant O-A retirement visa. Your policy must have at minimum 40,000 THB outpatient coverage and 400,000 THB inpatient coverage. Several Thai insurance companies offer plans specifically designed to meet these requirements at reasonable prices. For someone aged 60–70, expect to pay roughly 50,000–90,000 THB per year for a qualifying plan.",
      },
      {
        q: "Can I apply for the Thai retirement visa from Australia?",
        a: "Yes — you apply at the Royal Thai Embassy in Canberra, or Thai Consulates in Sydney or Melbourne. You will need your passport, proof of funds, health insurance certificate, police clearance certificate from the Australian Federal Police, and a medical certificate from a registered doctor. The process typically takes a few weeks.",
      },
      {
        q: "What is the 90-day reporting requirement?",
        a: "While living in Thailand on a long-term visa, you must report your address to Thai Immigration every 90 days. This is done by submitting a TM47 form — either online, by post, or in person at your local immigration office. If you leave Thailand and re-enter before your 90-day deadline, the clock resets. Missing the deadline incurs a fine of 2,000 THB (about $90 AUD).",
      },
      {
        q: "What happens if I visit Australia during my retirement in Thailand?",
        a: "Short visits to Australia are no problem — your Thai visa allows multiple re-entries. For your pension, visiting Australia has no negative effect on your payments. Regular trips home to see family, attend medical appointments, or handle financial matters are completely compatible with living on the pension in Thailand.",
      },
    ],
  },
  {
    category: "Healthcare",
    questions: [
      {
        q: "What happens to my Medicare when I move to Thailand?",
        a: "Your Medicare card remains active, but it only works in Australia. Living in Thailand, you cannot use Medicare for Thai medical services. If you return to Australia for a visit and see a doctor or go to hospital, Medicare covers you as normal. This is why private health insurance is essential for all Australian expats in Thailand.",
      },
      {
        q: "Is healthcare in Thailand good enough for retirees?",
        a: "Thailand has genuinely excellent private healthcare — particularly in Bangkok, Chiang Mai, Hua Hin, Pattaya and Khon Kaen. Private hospitals are modern, often internationally accredited, with English-speaking doctors many of whom trained overseas. Major Bangkok hospitals like Bumrungrad International are considered among the best in Asia. For most healthcare needs, Thai private hospitals are very good. For extremely complex or specialist procedures, some retirees prefer to fly home to Australia.",
      },
      {
        q: "How much does private health insurance cost in Thailand?",
        a: "For an Australian aged 60–70, expect to pay roughly 50,000–100,000 THB per year ($2,300–$4,500 AUD) for a plan that meets the retirement visa requirements and provides reasonable coverage. Costs increase with age and depend on the level of coverage and any pre-existing conditions. It is strongly recommended to get cover before leaving Australia, as pre-existing conditions are often excluded from new policies.",
      },
      {
        q: "Should I get health insurance before I leave Australia?",
        a: "Yes — strongly recommended. Once you have a diagnosed condition, getting comprehensive cover for that condition becomes much harder or more expensive. If you get insured while healthy, many conditions that develop later will be covered. Waiting until after you arrive in Thailand and have had a health scare is the wrong time to shop for insurance.",
      },
    ],
  },
  {
    category: "Money and Tax",
    questions: [
      {
        q: "Do I have to pay tax in Thailand on my Australian pension?",
        a: "Thailand introduced new rules in 2024 requiring foreign residents to declare overseas income brought into Thailand during the same calendar year it was earned. This is a complex and evolving area — the rules changed recently and enforcement is still developing. Most Australian retirees are advised to speak with a Thai tax accountant about their specific situation. Australia and Thailand do not have a comprehensive double tax agreement, so the situation is not fully clear-cut for everyone.",
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
        a: "Thailand is generally very safe for foreign retirees. Violent crime against foreigners is rare. The main risks are everyday ones — motorbike accidents (a genuine concern, take care on roads), petty theft in tourist areas, and scams targeting tourists. Retirees who settle into a city and live like locals rather than tourists generally have very few safety concerns.",
      },
      {
        q: "Can I drive in Thailand on my Australian licence?",
        a: "You can drive in Thailand on your Australian licence for up to 90 days. For longer-term residence, you should get a Thai driving licence. The process involves a medical certificate, vision test, and written test (available in English) at your local Land Transport Office. Many expats find it straightforward.",
      },
      {
        q: "What is the cost of living in Thailand compared to Australia?",
        a: "Generally speaking, a comfortable lifestyle in Thailand costs roughly 40–60% of what an equivalent lifestyle costs in a major Australian city. Rent is dramatically cheaper — a modern one-bedroom condo with pool in Chiang Mai or Khon Kaen rents for $400–$550 AUD/month versus $2,000+ in Brisbane. Food, healthcare, transport and entertainment are all significantly cheaper. The main exception is imported Western goods, which can cost more than in Australia.",
      },
      {
        q: "Can I buy property in Thailand as an Australian?",
        a: "Foreigners cannot own land in Thailand, but can own condominium units (apartments) in their own name — provided foreign ownership in that building does not exceed 49%. Many Australian retirees rent rather than buy, which gives flexibility without the legal complexities of property ownership. If you want to buy a house, it can be done through a long-term lease arrangement, though this involves legal complexity and is worth getting professional advice on.",
      },
      {
        q: "How do I make friends and build a social life in Thailand?",
        a: "Most cities with significant expat populations have active social clubs, golf groups, Hash House Harriers running/walking clubs, and regular expat meetups. The Hua Hin Expats Club, Chiang Mai Expats Club and Pattaya Expats Club all have decades of history and weekly events that welcome newcomers. Facebook groups for your chosen city are also very active. The expat community in Thailand is generally welcoming — the key is to put yourself out there in the first few months rather than waiting for friendships to come to you.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main style={{ background: 'var(--color-cream)', minHeight: '100vh' }}>

      {/* Header */}
      <div className="bg-thai-pattern py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-yellow-600/30 bg-yellow-600/10">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
              Common Questions
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
            Retiring in Thailand — FAQ
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Plain English answers to the questions Australians ask most about
            retiring in Thailand. No jargon, no spin.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Jump links */}
        <div className="card p-6 mb-10">
          <h2 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-ink-soft)' }}>
            Jump to a section
          </h2>
          <div className="flex flex-wrap gap-2">
            {faqs.map((section) => (
              <a
                key={section.category}
                href={`#${section.category.toLowerCase().replace(/ /g, '-')}`}
                className="text-sm px-3 py-1.5 rounded-full border transition-all hover:border-yellow-600 hover:text-yellow-700"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink-soft)' }}
              >
                {section.category}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        {faqs.map((section) => (
          <div
            key={section.category}
            id={section.category.toLowerCase().replace(/ /g, '-')}
            className="mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.questions.map((item, i) => (
                <details
                  key={i}
                  className="card overflow-hidden group"
                >
                  <summary
                    className="flex items-center justify-between p-5 cursor-pointer list-none"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    <span className="font-semibold text-base pr-4">{item.q}</span>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                      style={{ background: 'var(--color-cream)', color: 'var(--color-gold-dark)' }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    className="px-5 pb-5 text-base leading-relaxed border-t"
                    style={{ color: 'var(--color-ink-soft)', borderColor: 'var(--color-border)' }}
                  >
                    <p className="pt-4">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* Disclaimer */}
        <div className="p-5 rounded-xl border border-amber-100 bg-amber-50 text-sm text-amber-800 leading-relaxed mb-10">
          <strong>Disclaimer:</strong> The information on this page is general in nature and does not
          constitute financial, legal or tax advice. Pension rules, visa requirements and tax laws
          change regularly. Always verify current information with Centrelink (servicesaustralia.gov.au),
          the Thai Embassy, and a qualified adviser before making decisions. Every person's residency
          history is different — contact Centrelink International Services on 131 673 to confirm
          your specific entitlements.
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/" className="card p-6 text-center hover:border-yellow-600 transition-all group">
            <div className="text-3xl mb-2">🧮</div>
            <div className="font-display text-xl mb-1 group-hover:text-yellow-700 transition-colors" style={{ color: 'var(--color-ink)' }}>
              Pension Calculator
            </div>
            <div className="text-sm" style={{ color: 'var(--color-ink-soft)' }}>
              See exactly how far your pension goes in each Thai city
            </div>
          </Link>
          <Link href="/blog" className="card p-6 text-center hover:border-yellow-600 transition-all group">
            <div className="text-3xl mb-2">📖</div>
            <div className="font-display text-xl mb-1 group-hover:text-yellow-700 transition-colors" style={{ color: 'var(--color-ink)' }}>
              Retirement Guides
            </div>
            <div className="text-sm" style={{ color: 'var(--color-ink-soft)' }}>
              In-depth articles on visas, money, healthcare and daily life
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
