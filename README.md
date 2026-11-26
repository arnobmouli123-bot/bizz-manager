# Bizz Manager

Bizz Manager is an AI-powered business management workspace for small businesses, online shops, Facebook sellers, and local retailers.

## Phase 1 foundation

This starter contains a responsive marketing site, shared UI primitives, authentication screens, Supabase Auth server actions, email verification callback, and password reset flow. Auth is wired to Supabase but requires project credentials. Product, order, AI, billing, and admin features are not implemented yet; they are planned for later development phases.

## Requirements

- Node.js 20.9 or newer
- npm
- A Supabase project for sign-up, login, and password reset

## Run locally

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
npm run dev
```

Open http://localhost:3000. Without Supabase credentials the public site works, while authentication actions show a configuration message.

## Supabase setup

1. Create a Supabase project and copy its project URL and anon/publishable key into `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to `http://localhost:3000` locally and to the deployed HTTPS origin in production.
3. In Supabase Authentication URL configuration, add your site URL and redirect URL `http://localhost:3000/auth/callback` (and the production equivalent).
4. Configure email delivery and verification in Supabase Auth before inviting real users.

Never put a Supabase service-role key or Gemini API key in a `NEXT_PUBLIC_` variable. The public landing page does not require credentials.

## Available commands

```bash
npm run dev       # local development
npm run typecheck # TypeScript checks
npm run build     # production build
npm start         # serve a production build
```

## Deployment

Deploy the repository to Vercel using the Next.js preset. Add the Supabase environment variables in the Vercel project settings, configure the production callback URL in Supabase, then run a production build. Payment and AI integrations must remain disabled until their server-side credentials and verification flows are configured.
