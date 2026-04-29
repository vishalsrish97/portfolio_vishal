# Vishal — Portfolio

Angular 18 personal portfolio website with left sidebar layout.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Visit http://localhost:4200
```

## 📦 Build for Production

```bash
ng build
```

## 🗂️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── sidebar/         ← Fixed left sidebar + navigation
│   │   ├── home/            ← Hero section
│   │   ├── about/           ← About me + stats
│   │   ├── skills/          ← Animated skill bars + tools
│   │   ├── experience/      ← Timeline work experience
│   │   ├── education/       ← Education cards
│   │   ├── projects/        ← Project cards with links
│   │   └── contact/         ← Contact info + form
│   ├── shared/
│   │   └── data/
│   │       └── portfolio.data.ts   ← All content data
│   ├── app.component.*
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.scss              ← Global styles + CSS variables
└── index.html
```

## 🛠️ Tech Stack

- **Angular 18** — Standalone components, new control flow
- **SCSS** — Component-scoped styles + global variables
- **Angular Animations** — Smooth entrance & scroll animations
- **RxJS** — Scroll & intersection observables
