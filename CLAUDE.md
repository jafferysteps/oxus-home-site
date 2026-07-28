# Oxus Home — B2B contract bedding website

Static multi-page site for Oxus Home Ltd (UK contract bedding & hospitality textile manufacturer, company no. 17354032). Quote-only lead-gen site — **no cart, no prices, ever**. Every product page ends in an "Enquire / Request a Quote" CTA.

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

## Sacred copy patterns
- Positioning: "Timeless British comfort, made to order."
- RFQ form: only 4 required fields (name, work email, organisation, what you need); everything else optional. "We respond within one business day." / "No minimum order."
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
