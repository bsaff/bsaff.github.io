# Ben's Personal Website

A minimalist personal website built with [Astro](https://astro.build).

## Project Structure

```
.
├── src/
│   ├── layouts/     # Layout components
│   ├── pages/       # Page components
│   └── styles/      # Global styles
├── public/          # Static assets
│   ├── avatar.jpg
│   ├── bg.png
│   └── favicon/
└── .github/         # GitHub Actions workflow
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch. The workflow:

1. Builds the Astro site
2. Uploads the built files as an artifact
3. Deploys to GitHub Pages

## Design Philosophy

The site maintains a minimalist approach, focusing on content and readability. Built with the philosophy that tools should be chosen based on the problem at hand, not trends.

## License

All content © Benjamin Saff. Code is available under the MIT License.
