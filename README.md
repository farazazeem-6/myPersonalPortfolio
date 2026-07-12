# My Personal Portfolio

A responsive personal portfolio built with React and Vite. Showcases projects, skills, testimonials, and a contact form — with smooth animations, dark mode support, and a modern component-driven structure.

## Features

- Responsive layout with accessible components
- Dark / light theme support
- Project showcase with modal previews and external links
- Contact form integrated using EmailJS
- Smooth scroll, animated text, and interactive UI using Framer Motion & Lightswind
- State management with Redux Toolkit where needed

## Tech stack

- Vite + React 19
- Tailwind CSS, Lightswind, Framer Motion
- MUI & Chakra UI components (selectively used)
- React Router for routing
- Redux Toolkit for global state
- EmailJS for contact form handling

## Quick start

Prerequisites: Node.js (18+) and npm or Yarn

1. Install dependencies

```bash
npm install
# or
yarn
```

2. Start development server

```bash
npm run dev
# or
yarn dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

5. Lint the project

```bash
npm run lint
```

## Project structure

- public/ — static assets
- src/ — main source folder
	- components/ — reusable UI components (Header, Hero, ProjectBox, etc.)
	- pages/ — route-level pages (Home, etc.)
	- lib/ — utilities
	- hooks/ — custom React hooks
	- store/ — Redux store and slices

See the `src/components` folder for component implementations.

## Scripts

- `dev` — start Vite dev server
- `build` — build production bundle
- `preview` — locally preview production build
- `lint` — run ESLint

## Contributing

Suggestions and improvements are welcome — open an issue or a PR.

## License & Author

Created by Faraz. Feel free to use this code for personal or learning purposes.

