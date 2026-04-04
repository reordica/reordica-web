# CLAUDE.md — Reordica Marketing Site

## What this is

This is the marketing and lead generation website for Reordica (reordica.com). It is separate from the product application which lives in a different repo and deploys to app.reordica.com.

Reordica is an AI-native procurement intelligence platform for Irish wholesale distributors. It replaces the manual Excel spreadsheet that procurement teams use before raising purchase orders. The core value proposition: upload CSVs, get a structured reorder review with shortfall detection and confidence scores, and every decision is logged so institutional knowledge stays with the business.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (lead capture only — shared instance with product app)
- Deployed on Vercel at reordica.com

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, global metadata, SEO, font setup
    page.tsx          # Homepage — lead gen landing page
    globals.css       # Tailwind directives only
  components/
    LeadForm.tsx      # Lead capture form, wired to Supabase "leads" table
  lib/
    supabase.ts       # Supabase client (anon key, insert-only from frontend)
public/               # Static assets — logos, favicon, OG images
```

## Key conventions

- **Font**: Arial/Helvetica/sans-serif everywhere. This matches the product app. Do not introduce other fonts.
- **Colours**: Blue-600 (#2563eb) is the primary brand colour. Slate palette for text and backgrounds. No purple gradients, no indigo. Keep it professional and understated.
- **Logo**: Inline SVG in nav and footer. Two vertical bars (blue-600 and blue-500 at 0.7 opacity) followed by "Reordica" wordmark in Arial bold. Do not use image files for the logo in HTML — always inline SVG.
- **Tone of copy**: Direct, plain language. No hype, no buzzwords, no "revolutionary" or "game-changing." The audience is conservative Irish business owners and procurement managers aged 45-55. Write like you're explaining it over coffee, not pitching to a VC.
- **No "reconciliation" language**: The company rebranded from Reconcil to Reordica specifically because "reconciliation" confused people (they thought accounting/finance). Use "joining," "matching," "reviewing" instead. Never use "reconcile" or "reconciliation" in any copy.

## Brand context

- **Full name**: Reordica
- **Tagline**: "Replace the reorder spreadsheet with something smarter."
- **Subtitle**: PROCUREMENT INTELLIGENCE (used in logo lockup)
- **Domain**: reordica.com (marketing), app.reordica.com (product)
- **Email**: hello@reordica.com
- **Target market**: Irish wholesale distributors, 50-249 employees (~580 companies)
- **Pricing**: €399/month (not yet public on the marketing site)

## Supabase

The marketing site only writes to one table:

```sql
leads (
  id uuid primary key,
  name text not null,
  email text not null,
  company text not null,
  role text,
  created_at timestamptz default now()
)
```

RLS is configured to allow anonymous inserts but block anonymous reads. Do not add any other Supabase operations to the marketing site — it should never read from or write to product tables.

## Deployment

- Vercel, connected to github.com/reordica/reordica-web
- Custom domain: reordica.com
- Env vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- Static/SSG where possible. The only client-side interactivity is the lead form.

## Adding pages

New pages go in src/app/ using the App Router convention:

- `src/app/blog/page.tsx` → reordica.com/blog
- `src/app/pricing/page.tsx` → reordica.com/pricing
- `src/app/case-studies/page.tsx` → reordica.com/case-studies

Keep pages as server components by default. Only add "use client" when the component needs interactivity (forms, state).

## What not to do

- Do not add authentication or user accounts to this site. That belongs in the product app.
- Do not install heavy dependencies. This is a lightweight marketing site.
- Do not add analytics scripts without explicit approval — GDPR applies, the audience is European.
- Do not use stock photography or placeholder images. If an image is needed, it should be a real screenshot of the product or an SVG illustration.
- Do not expose the product app's API or any internal endpoints from this site.