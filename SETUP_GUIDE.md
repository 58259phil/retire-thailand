# 🇹🇭 Retire Thailand App — Setup Guide

A step-by-step guide to get your app running, even if you've never used Next.js before.

---

## What You Need First

Before starting, make sure you have:
- **Node.js** installed (version 18 or higher)
- **npm** (comes with Node.js automatically)
- A code editor — **VS Code** is recommended

### Check if Node.js is installed
Open your terminal (Command Prompt on Windows, Terminal on Mac) and type:
```bash
node --version
```
You should see something like `v20.x.x`. If not, download Node.js from https://nodejs.org (choose the LTS version).

---

## Step 1 — Copy the Project Files

Copy the `retire-thailand` folder to wherever you keep your projects. For example:
```
C:\Users\YourName\Projects\retire-thailand       (Windows)
/Users/YourName/Projects/retire-thailand         (Mac)
```

---

## Step 2 — Open in VS Code

1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `retire-thailand` folder
4. Open the integrated terminal: **Terminal → New Terminal**

---

## Step 3 — Install Dependencies

In the terminal, type:
```bash
npm install
```

This downloads all the packages the app needs (React, Next.js, Tailwind etc).
It takes 1–2 minutes. You'll see a `node_modules` folder appear — that's normal.

---

## Step 4 — Run the App Locally

```bash
npm run dev
```

You'll see:
```
▲ Next.js 14.x.x
- Local: http://localhost:3000
```

Open your browser and go to **http://localhost:3000**

🎉 Your app is running! Every time you save a file, the browser updates automatically.

---

## Step 5 — Understand the Project Structure

```
retire-thailand/
├── src/
│   ├── app/
│   │   ├── page.js              ← The main page (assembles components)
│   │   ├── layout.js            ← Sets fonts & metadata for ALL pages
│   │   ├── globals.css          ← All your CSS styles
│   │   └── api/
│   │       └── exchange-rate/
│   │           └── route.js     ← Your backend API (fetches live AUD/THB rate)
│   ├── components/
│   │   ├── Hero.js              ← Top banner section
│   │   ├── Calculator.js        ← Main calculator with all inputs
│   │   ├── CityCard.js          ← Individual city selection cards
│   │   ├── ResultsPanel.js      ← Results display for each city
│   │   ├── InfoSection.js       ← "How it works" + affiliate links
│   │   └── Footer.js            ← Page footer
│   └── lib/
│       └── data.js              ← All city costs & pension data
├── package.json                 ← Project config & dependencies
├── tailwind.config.js           ← Tailwind CSS config
└── next.config.mjs              ← Next.js config
```

### Key Difference from Create React App
- In CRA you had `src/index.js` as the entry point
- In Next.js, `src/app/page.js` is your home page
- Each file in `src/app/` with `page.js` becomes a URL route automatically
- API routes live in `src/app/api/` — no separate Node server needed!

---

## Step 6 — Customise Your Content

### Update city costs (as you learn them living in Thailand!)
Edit `src/lib/data.js` — all costs are in Thai Baht per month.

### Update pension rates
Also in `src/lib/data.js` — update `pensionRates` each March and September when Centrelink adjusts them.

### Add your affiliate links
Edit `src/components/InfoSection.js` — replace the placeholder URLs with your actual affiliate links from:
- **Wise:** https://wise.com/partnerships
- **OFX:** https://www.ofx.com/en-au/partners/
- **Pacific Prime:** https://www.pacificprime.com/affiliates/

---

## Step 7 — Deploy to the Internet (Free!)

### Option A: Vercel (Recommended — 1 click)

1. Create a free account at https://vercel.com (sign up with GitHub)
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
   Then create a repo at github.com and follow their instructions to push.
3. In Vercel, click **"Add New Project"** → import your GitHub repo
4. Click **Deploy**

That's it! Your app will be live at `your-project.vercel.app` in about 60 seconds.
Every time you push changes to GitHub, Vercel automatically redeploys.

### Option B: Custom Domain
1. Buy a domain like `retirethailand.com.au` from Namecheap (~$15/year)
2. In Vercel, go to your project → Settings → Domains
3. Add your custom domain and follow the DNS instructions

---

## Common Commands

```bash
npm run dev      # Start development server (use this while building)
npm run build    # Build for production (Vercel does this automatically)
npm run start    # Run the production build locally
```

---

## Making Changes — The Next.js Way

### Adding a new page (e.g. /about)
Create a file: `src/app/about/page.js`
```javascript
export default function AboutPage() {
  return <div>About page</div>;
}
```
That's it! Visit http://localhost:3000/about

### Adding a new API endpoint
Create a file: `src/app/api/cities/route.js`
```javascript
export async function GET() {
  return Response.json({ cities: ['Hua Hin', 'Khon Kaen'] });
}
```
Visit http://localhost:3000/api/cities

### The 'use client' directive
You'll see `'use client';` at the top of some files. This tells Next.js that this component uses browser features (like useState, useEffect, or onClick). 

- Files **with** `'use client'` → React works exactly like CRA
- Files **without** it → Rendered on the server (better for SEO)

---

## Troubleshooting

**"Module not found" errors**
```bash
npm install
```

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

**Styles not loading**
Make sure `globals.css` is imported in `src/app/layout.js` (it already is in this project).

**Exchange rate showing "approximate"**
The free exchange rate API has rate limits. This is fine — it falls back to ฿22.00 per A$1 which is close to the real rate.

---

## Next Steps for the App

Once you're comfortable, here are features to add next:

1. **Email signup** — Add a Mailchimp or ConvertKit form to build your list
2. **City detail pages** — `/cities/hua-hin` with deeper info (SEO gold)
3. **Visa checklist page** — Interactive step-by-step checklist
4. **Blog section** — Your real experiences living in Thailand (huge for SEO)
5. **Save/share results** — Let users share their budget calculation

---

## Getting Help

- **Next.js docs:** https://nextjs.org/docs (excellent docs)
- **Tailwind CSS docs:** https://tailwindcss.com/docs
- **Stack Overflow:** Tag questions with `next.js`

You can also paste any error messages directly into Claude and get help fixing them!
