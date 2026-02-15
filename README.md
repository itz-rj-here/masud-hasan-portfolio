# Masud Hasan — Portfolio

A modern, responsive portfolio website showcasing the work and profile of **Masud Hasan** — Lecturer, Online Educator, Actor, Criminologist & Digital Creator from Dhaka, Bangladesh.

## Overview

This portfolio highlights Masud Hasan's expertise in ICT education and digital creation, with smooth animations and an accessible, visually engaging design. Built for fast performance and easy maintenance.

## Features

- **Responsive Design** — Works seamlessly across devices
- **Dark / Light Mode** — Theme support
- **Animated Sections** — Framer Motion for fluid interactions
- **Accessible UI** — shadcn/ui components with Radix primitives

## Tech Stack

| Category      | Technologies                             |
|---------------|------------------------------------------|
| Framework     | React 18                                 |
| Build Tool    | Vite                                     |
| Language      | TypeScript                               |
| Styling       | Tailwind CSS                             |
| Components    | shadcn/ui (Radix UI)                     |
| Animation     | Framer Motion                            |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Scripts

| Command          | Description                    |
|------------------|--------------------------------|
| `npm run dev`    | Start development server       |
| `npm run build`  | Build for production           |
| `npm run preview`| Preview production build       |
| `npm run lint`   | Run ESLint                     |

## Project Structure

- `src/components/` — Reusable UI components
- `src/pages/` — Page-level components
- `src/assets/` — Images and static assets
- `public/` — Public static files (e.g. favicon)

## Favicon

Place your favicon at `public/favicon.ico` or add a `<link rel="icon">` in `index.html`. The navbar uses the text "MH" as the logo; customize it in `src/components/Navbar.tsx` for an image logo.

---

**Website built by [It'z RJ](https://github.com/itz-rj-here/).**
