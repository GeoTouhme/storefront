---
name: Midnight Reserve
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#76d3f0'
  on-secondary: '#003642'
  secondary-container: '#007f9a'
  on-secondary-container: '#fafdff'
  tertiary: '#bed5bd'
  on-tertiary: '#223525'
  tertiary-container: '#a2b9a2'
  on-tertiary-container: '#364a38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#b3ebff'
  secondary-fixed-dim: '#76d3f0'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#d1e9d1'
  tertiary-fixed-dim: '#b6ccb5'
  on-tertiary-fixed: '#0d1f11'
  on-tertiary-fixed-variant: '#384c3a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system for Balport Liquors is built upon the concept of "Coastal Sophistication." It bridges the gap between a high-end boutique and a welcoming neighborhood shop. The aesthetic is moody, premium, and authoritative, yet avoids being cold or unapproachable. 

The visual style is **High-Contrast Minimalism** mixed with **Tonal Layering**. It utilizes the deep darks of a speakeasy paired with the airy lightness of a seaside sunset. Experience is centered around tactile-feeling elements, generous whitespace to allow product photography to breathe, and subtle nods to the brand's coastal roots through organic curvature and gold accents.

The target audience is the discerning local resident and the enthusiast collector who values curation, heritage, and a premium shopping experience.

## Colors

The palette is anchored by a deep **Charcoal Black (#121212)** background, providing a canvas that allows product colors to pop. The primary accent is **Amber Gold (#D4AF37)**, used exclusively for high-priority actions and luxury markers. 

To honor the brand's visual identity, a **Coastal Teal (#48A9C5)** is used sparingly for secondary information or interactive hover states. **Forest Green (#1E3121)** serves as a deep tonal variant for backgrounds of cards or containers. Typography is set in **Cream (#F5F5DC)** to reduce the eye strain of pure white and to evoke a sense of vintage parchment and high-end labeling.

## Typography

This design system uses a high-contrast typographic pairing to signal both heritage and modernity. **Playfair Display** is the voice of the brand, used for headlines to mirror the elegance of vintage spirits labels. **Hanken Grotesk** provides a clean, functional counterpoint for body copy, ensuring high legibility in the dark interface.

Large headlines should use tighter letter spacing for a more "designed" editorial feel. Labels and small navigational elements should utilize increased letter spacing and uppercase styling to maintain clarity against the dark backgrounds.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centered with generous margins to create an "exclusive" feeling. A 12-column grid is used for desktop, collapsing to a 4-column grid for mobile.

Spacing is aggressive—generous whitespace (or "dark space") is essential to maintaining the premium vibe. Elements should never feel crowded. Vertical rhythm is based on an 8px baseline grid to ensure consistent alignment of text and components.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Soft Ambient Shadows**. Instead of traditional gray shadows, we use a slightly tinted, deep shadow (#000000 at 40% opacity) with a large blur radius (20px to 40px) to make cards appear as if they are floating slightly above the dark surface.

Interactive surfaces (like cards or buttons) use a subtle **Inner Glow** or a 1px border in a slightly lighter charcoal (#2A2A2A) to define their edges against the dark background. When an element is raised, it can also transition to a slightly lighter background color (e.g., from #121212 to #1E1E1E).

## Shapes

The shape language is defined by a **rounded-lg (10px)** standard. This radius is applied to buttons, input fields, and cards to soften the high-contrast aesthetic and make the brand feel more "approachable" and "welcoming" as requested.

- **Standard Radius:** 10px (for buttons and inputs)
- **Container Radius:** 16px (for large cards or modals)
- **Icon Enclosures:** Circular (to echo the sun in the brand logo)

## Components

### Buttons
Primary buttons use the **Amber Gold (#D4AF37)** background with black text for maximum contrast. Secondary buttons use a ghost style with a 1px Gold border and Gold text. Hover states for primary buttons should involve a subtle scale increase (1.02x) and a slight brighten of the amber hue.

### Cards
Cards for product listings should use a slightly lighter background than the main surface (#1E1E1E) with a 1px border (#2A2A2A). Images should be high-quality, ideally with the background removed or color-matched to the UI.

### Input Fields
Inputs are dark with a **Cream (#F5F5DC)** border at 20% opacity. Upon focus, the border becomes the **Coastal Teal (#48A9C5)** to provide clear feedback that doesn't compete with the primary "Buy" actions.

### Chips & Tags
Used for liquor categories (e.g., "Bourbon", "Peated"). These should have a subtle green (#1E3121) background with cream text, keeping them subordinate to the primary product titles.

### Lists
Lists in menus or search results should use thin dividers (#2A2A2A) and plenty of vertical padding (16px+) to maintain the system's breathable, premium feel.