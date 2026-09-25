# Codematic Labs landing-page refinement

## Direction
- Refine only the Home page using the selected **Dark editorial rhythm** direction.
- Preserve Codematic Labs’ logo, blue gradient identity, original copy themes, existing routes, and working navigation.
- Adapt HatchWorks’ design language without copying its text, logos, imagery, or proprietary assets.

## Visual system
- Keep the strict near-black canvas, restrained off-white type, muted gray body copy, and electric sky-blue/deep-navy accents.
- Strengthen the typography hierarchy with a bold geometric sans display treatment, mixed weights, larger editorial headlines, and compact indexed labels.
- Use crisp 8px-or-less card corners, faint hairline borders, slightly elevated charcoal surfaces, minimal shadows, and controlled blue edge-lighting.
- Tighten the fixed header and use more deliberate full-width section bands, generous vertical rhythm, and asymmetric desktop compositions that collapse cleanly on mobile.

## Landing-page structure
- Recompose the hero into a more typographic, high-impact opening with staggered word reveals, restrained media treatment, and clear primary and secondary actions.
- Upgrade the client strip into a slow, seamless logo/name marquee with masked edges and pause-safe reduced-motion behavior.
- Replace the uniform services grid with numbered editorial capability cards/rows featuring clearer hierarchy, icon treatment, and arrow-link interactions.
- Present the process as a strongly indexed horizontal sequence on desktop and a precise stacked sequence on mobile.
- Rework featured projects into a varied editorial grid with larger imagery, category/result metadata, and refined image transitions.
- Add a continuous multi-row showcase loop using existing service/project content, with alternating directions and stable card sizing.
- Finish with a focused, high-contrast project CTA that flows naturally into the existing minimal footer.

## Motion and interaction
- Use one shared smooth easing curve for word reveals, section entrances, line-draw animations, card transitions, and button sheen.
- Stagger cards as they enter the viewport rather than revealing entire groups at once.
- Add subtle image scale/parallax and restrained card lift/border transitions; avoid heavy 3D effects or excessive glow.
- Keep all infinite loops seamless and slow, pausing appropriately for interaction and degrading to static layouts when reduced motion is requested.

## Technical details
- Keep all colors, gradients, borders, shadows, and motion values as semantic tokens in the global stylesheet.
- Extend the existing content-driven data only where the new card treatments need richer labels or metadata.
- Reuse the current generated project imagery and brand assets; no external hotlinked or copied HatchWorks media.
- Preserve route-specific metadata and leave Services, Why Us, Case Studies, Tech Stack, and Contact content unchanged except for shared header/footer styling required for consistency.

## Verification
- Check the full Home page at desktop and mobile widths for text fit, stable loop dimensions, non-overlapping navigation, and consistent section rhythm.
- Verify links, marquee continuity, reveal behavior, project navigation, keyboard focus, reduced-motion behavior, and current diagnostics.
