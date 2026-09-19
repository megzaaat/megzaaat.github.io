# Ahmed Magdy Asker — Developer Portfolio

A responsive portfolio for a Senior Flutter Developer and Mobile Team Lead. Built with React, TypeScript, Tailwind CSS, and Vinext, with a static export for GitHub Pages.

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
- SEO and social metadata: `app/layout.tsx`
- Downloadable CV: `public/Ahmed_Magdy_Asker_CV.pdf`
- Social sharing image: `public/og.png`

## Quality checks

```bash
npm run lint
npm run build
```
