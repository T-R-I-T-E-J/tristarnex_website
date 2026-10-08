# Tristarnex / ShieldMSP

A complete Next.js marketing-site redesign around ShieldMSP's constrained security decision and response architecture. The supplied Tristarnex logo, navy/teal palette, custom pipeline diagrams, and interactive incident walkthrough define the visual identity.

## Development

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm start
```

## Pages

- `/` — company and product introduction with interactive sample incident
- `/platform` — architecture and MSP workflow
- `/safety` — safety gate, human approval, Shadow Mode and verified response
- `/integrations` — MVP focus and development roadmap
- `/company` — company, founder and principles
- `/resources` — product explainers and FAQ
- `/contact` — inquiry form delivered through the server-side Resend API
- `/privacy`, `/terms` — restyled existing legal wording

Previous services, pricing and blog routes redirect to their new destinations.

## Important boundaries

ShieldMSP is presented as in MVP development. The product tour uses fictional data and never connects to security-provider APIs. No fabricated customer metrics, certification claims or testimonials are published.

See [redesign notes](docs/redesign-notes.md) for source conflicts, scope decisions and pre-launch content review items. Confidential product references in `dox/` stay outside public assets and source control.

## Validation

Production build and TypeScript validation passed. ESLint passed on the changed implementation. Browser review covered desktop/mobile layouts, mobile navigation, simulated containment, critical-asset escalation, uncertain-activity escalation, Shadow Mode, and required contact fields. Route checks covered all new pages, sitemap, robots, icon, social card and legacy redirects. Real form delivery was not tested with an external submission.

The existing legal wording needs owner review before public launch.

## Contact email setup

Copy `.env.example` to `.env.local`, then set `RESEND_API_KEY`, `CONTACT_EMAIL_FROM`, and `CONTACT_EMAIL_TO`. The sender domain must be verified in that Resend account. The recipient is `info@tristarnex.com`; the visitor’s email is used as Reply-To, so your team can reply directly.

For production, add these three variables in your hosting provider’s environment settings and redeploy. Never commit the real key or prefix it with `NEXT_PUBLIC_`. The API validates fields, limits request size, checks browser origin, ignores honeypot submissions, and reuses a provider idempotency key on retries. Apply hosting-level rate limits to `/api/contact` before broad public exposure.

Run `node scripts/test-contact.mjs` to check server validation, mail routing, HTML escaping, duplicate prevention and provider failures without sending real email.
