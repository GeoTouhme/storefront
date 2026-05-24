# Balport Liquors Storefront Development Guidelines

This file serves as a guide for development commands, build processes, and architecture style rules for the **Balport Liquors Storefront** project.

## Development Commands

Always run these commands from the `balport-liquors` directory:

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Lint Code**: `npm run lint` (if configured)

## Tech Stack & Project Architecture

- **Frontend Framework**: React 18+ (bundled via Vite)
- **Routing**: `react-router-dom`
- **Styling**: Vanilla CSS (modular, cohesive variables declared in `index.css`)
- **Key Modules**:
  - `balport-liquors/src/components/Header.jsx`: Circular logo design and premium navigation bar.
  - `balport-liquors/src/pages/Deals.jsx`: Curated Weekly Deals panel displaying 49 local deal products with robust visual fallbacks.
  - `balport-liquors/public/images/`: Storage for local assets. Weekly deals images are housed in `/images/deals/` named as lowercased, snake-cased versions of their product names.

## Code & Quality Style Rules

1. **Vanilla CSS variables**: Use established theme custom properties (`--color-primary`, `--color-bg-primary`, etc.) located in `index.css` for visual consistency. Avoid using hardcoded styling.
2. **Error Resilient Images**: All dynamic/scraped product images must utilize the standard `onError` safety handler to prevent broken links on the UI:
   ```javascript
   onError={(e) => {
     e.target.onerror = null;
     e.target.src = '/images/watermark.png'; // fallback to store watermark
   }}
   ```
3. **Component Structure**: Keep components highly focused, declarative, and visually state-of-the-art with transitions/micro-animations.
