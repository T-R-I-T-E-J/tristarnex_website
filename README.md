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
- `/contact` — inquiry form using the existing Formspree endpoint
- `/privacy`, `/terms` — restyled existing legal wording

Previous services, pricing and blog routes redirect to their new destinations.

## Important boundaries

ShieldMSP is presented as in MVP development. The product tour uses fictional data and never connects to security-provider APIs. No fabricated customer metrics, certification claims or testimonials are published.

See [redesign notes](docs/redesign-notes.md) for source conflicts, scope decisions and pre-launch content review items. Confidential product references in `dox/` stay outside public assets and source control.

## Validation

Production build and TypeScript validation passed. ESLint passed on the changed implementation. Browser review covered desktop/mobile layouts, mobile navigation, simulated containment, critical-asset escalation, uncertain-activity escalation, Shadow Mode, and required contact fields. Route checks covered all new pages, sitemap, robots, icon, social card and legacy redirects. Real form delivery was not tested with an external submission.

The existing legal wording and the receiving Formspree account need owner review before public launch.
