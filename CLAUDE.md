# Oxus Home — B2B contract bedding website

Static multi-page site for Oxus Home Ltd (UK-based service provider and buying office for contract bedding & hospitality textiles — NOT a manufacturer; company no. 17354032). Quote-only lead-gen site — **no cart, no prices, ever**. Every product page ends in an "Enquire / Request a Quote" CTA.

## Stack
Plain HTML/CSS/JS, no build step. Shared `styles.css` + `site.js` across 10 pages:
index, hotels, care-homes, trade, what-we-make, custom, quality, about, resources, contact.

## Brand rules (do not violate)
- Palette only: Bone `#F4F1EA` (bg), Ink `#2C2C2A` (text), River teal `#0F6E56` (single accent, sparing), Stone `#B4B2A9` (secondary/dividers). Never stark white, never pure black, teal never dominant.
- Type: Fraunces (headings), Inter (body) — via Google Fonts.
- River-line motif (`.river`, the clip-path taper): appears once in the header lockup and once on the homepage hero. **Never repeat as a pattern, wave motif, or border.** Never recolour it separately.
- On dark backgrounds the wordmark inverts to Bone — never white-on-teal.
- No literal water/bed/moon/star iconography.
- Tone of voice: quiet luxury — short declarative sentences, restraint over hype, specialist-consultant register. No consumer hard-sell, no exclamation marks.

## Positioning (rebrand, Oct 2026)
Oxus Home is a UK buying office. It holds no stock and runs no factories; it sources through manufacturing partners in Asia and Europe, with senior technicians on the ground at every stage of production and one named contact per programme.
**Never write:** "Made in the UK", "own production", "our factory", "we manufacture / produce / make", "no trading desk between you and the people making your order", "domestic manufacturing".
**Preferred words:** specification, programme, construction, sourced, confirmed at quotation, held across reorders, consistent, one named contact. **Avoid:** luxury, premium, bespoke, artisan, handcrafted, made with care, superlatives.
Nav names: "What We Source" (folder `/what-we-make/`), "Custom Programmes" (folder `/custom/`) — URLs unchanged on purpose.

## Image style guide (for the final catalogue photography)
- Crisp white / bone / neutral palette
- Cool-to-neutral natural daylight — no warm amber or heavy artificial lighting
- Product as hero — no factory, loom, production-floor or manufacturing imagery, ever
- No consumer lifestyle framing — B2B hospitality editorial
Pending slots are `.ph.pending` boxes; each has an `<!-- IMAGE: ... -->` comment naming the intended subject.

## Sacred copy patterns
- Footer/site tagline: "Timeless British comfort, made to order." (approved alternative: "Timeless British comfort, with no noise.")
- RFQ form: only 4 required fields (name, work email, organisation, what you need); everything else optional. "We respond within one business day." Do not claim "no minimum order" outright — say quantities are confirmed against the specification.
- CTA is always "Request a Quote" / "Request Your Quote", never "Submit".

## TODO before launch
1. Replace `[PHONE]` placeholder everywhere (grep for it).
2. Wire the RFQ form to a backend — see the PRODUCTION NOTE comment in `site.js` (Netlify Forms or Formspree; add `action`, remove the preventDefault demo handler).
3. **Compliance gate (launch blocker):** care-homes.html and quality.html contain UK fire-safety claims (BS 7175 Crib 5, RRFSO 2005, OEKO-TEX). All flagged with visible "pending review" note-boxes. A qualified fire-safety/compliance advisor must sign off before these pages go live. Do not add certification badges/logos until certificates are actually held.
4. Replace `.ph` placeholder blocks with real photography — each placeholder's caption is the shot brief (real factory/process imagery, natural light; no stock, no DTC lifestyle shots).
5. Team cards in about.html have `[Founder name]` placeholders.
6. Testimonial on index.html is a labelled placeholder — replace with a real consented quote; never invent quotes or client logos.
7. Confirm hello@oxushome.co.uk is live.

## Reference
Full copy deck: `Oxus_Home_Website_Copy_Deck.docx` (sibling of this folder). Brand identity source: Oxus_Home_Brand_Identity.pdf / _Brief.docx (owner has them).
