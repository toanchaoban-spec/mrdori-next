# MrDori Next

A modular Next.js App Router rebuild of the legacy `mrdori.html` prototype.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm run build
```

## Deployment

### GitHub

1. Push this repository to GitHub.
2. Keep the `legacy/` folder committed for design reference only.
3. Ensure the default branch contains the latest Next.js app code.

### Netlify

This project is prepared for Netlify's modern Next.js support.

1. Import the GitHub repository into Netlify.
2. Netlify will use `netlify.toml` and run `npm run build`.
3. Use Node.js 20.9.0 or newer (required by Next.js 16).
4. Optionally add `NETLIFY_NEXT_SKEW_PROTECTION=true` in Netlify environment variables for safer in-session deploy transitions.

## Project structure

- `src/app` - App Router routes and route-level files.
- `src/components` - Reusable UI building blocks.
- `src/data` - Shared demo property content.
- `src/lib` - Shared formatting helpers.
- `legacy` - Archived single-file prototype reference.
