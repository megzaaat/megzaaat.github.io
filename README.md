# Ahmed Magdy Asker — Developer Portfolio

A responsive portfolio for Ahmed Magdy, Mobile Engineer, based on the desktop, tablet, and mobile Figma designs. Built with React, TypeScript, Tailwind CSS, and Vinext, with a static export for GitHub Pages.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static website is generated in `dist/client/`.

## Deploy to GitHub Pages

1. Create the repository `megzaaat.github.io` on GitHub.
2. Push this project to its `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.
6. Visit `https://megzaaat.github.io/`.

Every future push to `main` automatically rebuilds and deploys the site.

## Update content

- Main portfolio content: `app/page.tsx`
- Visual design: `app/globals.css`
- Mobile navigation: `components/mobile-navigation.tsx`
- Downloaded official Figma assets: `public/figma/`
- SEO and social metadata: `app/layout.tsx`
- Downloadable CV: `public/Ahmed_Magdy_Asker_CV.pdf`
- Social sharing image: `public/og-mobile-engineer.png`

## Quality checks

```bash
npm run lint
npm run build
```

The existing user-site deployment (`megzaaat.github.io`) uses the root base path. Figma imagery uses relative URLs and is included in the static export; Manrope is bundled by `next/font`. The Pages workflow deploys only pushes to `main`; feature branches do not deploy automatically.

Design reference: https://www.figma.com/design/vD1LbaV43NkEhxuqlso3wX (desktop `3:138`, tablet `3:232`, mobile `3:324`). The contact and project links have at least 44px touch targets, which adds some vertical space compared with the Figma prototype.
