# Furniture Store

## Overview
A React-based furniture store website built with Vite and TailwindCSS.

## Project Architecture
- **Framework**: React 19 with Vite 7
- **Styling**: TailwindCSS 4
- **Routing**: React Router DOM 7

## Project Structure
```
src/
├── assets/          # Images and SVG icons
├── components/      # Reusable UI components
│   ├── browse/      # Browse section
│   ├── carusel/     # Carousel component
│   ├── discover/    # Discover section
│   ├── header/      # Navigation header
│   ├── learn/       # Learn section
│   └── works/       # Works section
├── pages/           # Page components
│   └── Home.jsx     # Main home page
├── App.jsx          # Root application component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to build for production (outputs to `dist/`)

## Recent Changes
- January 2026: Configured for Replit environment
  - Set Vite to bind to 0.0.0.0:5000
  - Enabled allowedHosts for proxy support
  - Fixed case-sensitive import in Home.jsx
