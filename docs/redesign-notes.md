# Tristarnex website redesign

The existing Next.js repository was brought into this workspace on `codex/website-redesign`. The supplied PNG is the official logo and is displayed through cropped SVG viewports without replacing its geometry or wordmark.

## Product understanding

Tristarnex Private Limited (founded 2026, founder Tritej Abbireddy) is building ShieldMSP for MSPs protecting SMBs. The product is a constrained decision and response layer above security providers, not a replacement EDR or an unrestricted AI SOC.

The design emphasizes validated ingestion, normalization, deduplication, deterministic Sigma rules, MITRE context, AI assistance, safety checks, bounded response, verification, and audit. AI remains a contextual branch without independent execution authority. Customer context and permissions remain tenant-scoped.

## Source conflicts and editorial decisions

- PDR v2, Architecture v2, Implementation Roadmap v2 and Sigma design establish rule primacy. Older business-plan passages describe AI as the primary engine and contain unvalidated market, pricing and performance assumptions; those claims are excluded.
- PDR includes SentinelOne and PSA in MVP scope; the business plan places multi-EDR support later, and the unchecked implementation roadmap does not establish connector completion. Public copy uses Microsoft Defender as MVP focus and labels other adapters planned, without claiming production availability.
- PDR and Security Design give Tier 4 an 85% threshold while Architecture and Implementation Roadmap v2 require 90% for Tier 3/4. The conceptual demo and safety explainer use the roadmap's conservative 90/70 routing, with all other checks required. Confirm canonical policy before launch.
- Sigma design includes identity actions at lower per-rule thresholds, while PDR and security documents defer account/email containment. The public site labels these future scope; the demo never automates identity actions.
- Kill-process reversibility, exact provider endpoints, API rates, session expiry, retention and AI score composition disagree between documents. Public copy avoids these implementation-specific promises. Verification and authorized reconnection are explained without promising universal reversal.
- Business projections, benchmarks, partner/customer claims, certification badges, assumed SLAs and testimonials are excluded.
- The interactive tour is a conceptual simulation with fictional endpoints. It never calls a security-provider API.

## Website scope

Home, platform, safety, integrations, company, resources, contact, privacy and terms. Previous service/pricing/blog URLs redirect to the appropriate new pages. Metadata, sitemap, social card and llms.txt use the new positioning.

The contact form retains the previous site's Formspree endpoint (`mjgapzyo`) and supports validation, pending, success, error and timeout states. No real test inquiry was sent. Confirm the receiving account and delivery before public launch.

The existing privacy and terms wording is preserved and restyled. It contains UK-specific company/jurisdiction and service assumptions from the old site. Company/legal owners need to approve updated text before publication; this redesign does not silently rewrite legal terms.

Confidential product documents in the user-supplied `dox/` folder are not copied into public assets or linked from the website.

## Run

`npm ci`, then `npm run dev`. Production: `npm run build`, then `npm start`.

The redesign is prepared for the requested GitHub repository. Live-site deployment and hosting configuration are separate from this source-code update.
