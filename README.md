# AntiRot Web

The official landing page and web presence for SMKAI Ventures and AntiRot. 

## About
AntiRot is not your ordinary social media or education app. We're replacing endless scrolling with meaningful thinking. 

This repository contains the marketing site built to introduce users to the AntiRot mobile app, showcasing features like Chai Tapri and 1v1 Debates. It also serves as the corporate landing page for SMKAI Ventures Private Limited.

## Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Package Manager:** Yarn (Berry)

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the dev server:
   ```bash
   yarn dev
   ```

## Deployment (Netlify)
This project is configured for automated deployment on Netlify.

- **Build command:** `yarn build`
- **Publish directory:** `dist`

*Note: The `.yarn/releases/` directory is checked into git to ensure the build server uses the exact same Yarn v4 version as local development.*

## Assets & Theming
The design system, color variables (`src/index.css`), and brand assets (`src/assets/`) are mapped 1:1 with the core React Native application. If you need to update the scrolling phone screenshots in the Featured Product section, simply replace the JPEGs in `src/assets/screenshots/`.
