# Mohammed Annahri — Portfolio

Professional portfolio website showcasing selected frontend and full-stack projects, demonstrating modern web development practices, animations, and deployment-ready build configuration.

## Live Demo

- Production (Vercel): https://mannahri-portfolio.vercel.app/

If you haven't deployed yet, see the **Deployment** section below for a quick way to host the site on Vercel.

## Key Features

- Clean, responsive UI built with React and Chakra UI
- Smooth animations via Framer Motion
- Accessible navigation with mobile support
- Project detail pages with problem/solution/features/tech stack
- Contact form integration and external links (GitHub / LinkedIn / Email)

## Tech Stack

- React + React Router
- Vite (development & build)
- Chakra UI (component library)
- Framer Motion (animations)
- react-icons
- Deployed with Vercel (recommended)

## Getting Started (Local Development)

1. Clone the repository

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser; the Vite dev server will hot-reload as you edit files.

## Build for Production

```bash
npm run build
```

The production-ready output is generated in the `dist` folder. Serve it locally for testing with a static server, e.g. `npx serve dist`.

## Deploying to Vercel (Recommended)

1. Create a Vercel account and connect your GitHub repository.
2. Choose the repository and accept the defaults. For Vite apps, Vercel typically detects the framework automatically.
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy — Vercel will build and provide a production URL.

If you prefer CLI deployment:

```bash
npx vercel --prod
```

## Project Structure (high-level)

- `portfolio/` — the frontend app powered by Vite
  - `src/` — React source code
    - `components/` — UI components and sections
    - `data/` — project metadata and content used by pages
    - `assets/` — static assets and images
  - `index.html`, `vite.config.js`, `package.json`

## Accessibility & UX Notes

- Mobile-first layout with an accessible full-screen mobile menu
- Focus/active outlines have been tuned for a clean visual experience while keeping keyboard accessibility
- External links open in a new tab (`target="_blank" rel="noopener noreferrer"`)

## Contributing

- Feel free to open issues or pull requests for bugs, improvements, or content updates.
- When contributing code, follow the existing style and run lint/tests (if applicable) before creating a PR.

## License

This repository does not include a specific license file. Add a license (e.g., MIT) if you intend to make the code open-source.

## Contact

- GitHub: https://github.com/simopoza
- LinkedIn: https://www.linkedin.com/in/mohammed-annahri/
- Email: annahrimohammed@gmail.com

---

If you'd like, I can:
- add a `vercel.json` with custom routes or headers,
- create a short deploy checklist and GitHub Actions workflow, or
- update the `README` with screenshots and a favicon checklist.
Tell me which you'd like next and I will add it.
