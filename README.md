# Reordica — Marketing Site

Lead generation and marketing website for [reordica.com](https://reordica.com).

Separate from the product app (which lives at `app.reordica.com`).

## Stack

- **Next.js 14** (App Router, static/SSG)
- **Tailwind CSS**
- **Supabase** (lead capture — shared instance with product app)
- **Vercel** (hosting)

## Getting started

```bash
# Install dependencies
npm install

# Copy env template and add your Supabase credentials
cp .env.local.example .env.local

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase setup

Create a `leads` table in your existing Supabase project:

```sql
create table leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  company text not null,
  role text,
  created_at timestamptz default now()
);

-- Allow anonymous inserts from the marketing site
alter table leads enable row level security;

create policy "Allow anonymous lead inserts"
  on leads for insert
  with check (true);

-- Prevent anonymous reads (leads are private)
create policy "Only authenticated users can read leads"
  on leads for select
  using (auth.role() = 'authenticated');
```

## Deployment

1. Push this repo to GitHub at `github.com/reordica/reordica-web`
2. Connect the repo to Vercel
3. Set the custom domain to `reordica.com`
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

The product app deploys separately to `app.reordica.com`.

## Project structure

```
src/
  app/
    layout.tsx      # Root layout, metadata, SEO
    page.tsx        # Homepage (lead gen landing page)
    globals.css     # Tailwind imports
  components/
    LeadForm.tsx    # Lead capture form (wired to Supabase)
  lib/
    supabase.ts     # Supabase client
public/             # Static assets (favicon, OG images, logos)
```

## Adding pages

Future pages (blog, case studies, pricing) go in `src/app/`:

```
src/app/blog/page.tsx        → reordica.com/blog
src/app/pricing/page.tsx     → reordica.com/pricing
src/app/case-studies/page.tsx → reordica.com/case-studies
```
