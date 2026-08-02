# Tapish Vais — Developer Portfolio

Premium portfolio for **Tapish Vais** — React Native & Full Stack Developer.
Built with Next.js 15, React, Tailwind CSS, shadcn/ui, Framer Motion and MongoDB.

Live: https://react-native-studio-1.emergent.host

## Features

- Cinematic dark hero with animated gradients, typing effect and glass workspace card
- Animated stats, skills with progress bars, vertical experience timeline
- Featured projects (Breakfree, GenAI Mock Interview, FindMyLawyer)
- Why-Hire-Me grid, testimonials, certifications
- Contact form wired to MongoDB (`/api/contact`)
- Extras: custom cursor, scroll progress, back-to-top, ⌘K command palette, tech marquee, loading screen
- Professional indigo/blue palette inspired by Stripe & Linear
- Fully responsive, dark mode by default

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** Tailwind CSS + shadcn/ui + Lucide icons
- **Motion:** Framer Motion
- **DB:** MongoDB (via native driver)
- **Fonts:** Inter, Space Grotesk, JetBrains Mono

## Getting Started

```bash
# 1. Install deps
yarn install

# 2. Copy env
cp .env.example .env
# then edit .env with your MongoDB URL

# 3. Run dev
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  api/[[...path]]/route.js   # /api/contact + /api/health
  layout.js                  # metadata, fonts
  page.js                    # composes all sections
  globals.css                # design tokens + animations
components/
  portfolio/                 # Hero, About, Skills, Projects, ...
  ui/                        # shadcn primitives
lib/
  portfolio-data.js          # content (experience, projects, skills)
```

## Contact

- Email: tapishvais2003@gmail.com
- GitHub: https://github.com/Tapishvais
- LinkedIn: https://www.linkedin.com/in/tapish-vais-249570248/

Made with ♥ by Tapish Vais.
