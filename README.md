# The Nikahnama Org

Website for The Nikahnama Org, a youth-led initiative that helps people understand the Nikahnama (the Pakistani marriage contract), the rights it gives, and the clauses that are often left blank or crossed out.

**Live site:** https://thenikahnamaorg.vercel.app

## What's on the site

- **Home**: introduction to the Nikahnama and where to begin
- **Clauses**: plain-language explanations of key clauses, each with its own page, including a province-by-province table of the legal marriage age
- **FAQs**: common questions about marriage rights
- **Suggestions**: an anonymous Google Form for feedback and ideas
- **Team**: profiles of the people behind the organization

## Built with

- React 18
- Vite 4
- Plain CSS, one stylesheet per component
- Deployed on Vercel

## Running it locally

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

To make a production build:

```bash
npm run build
```

The output goes to `dist/`.

## Project structure

```
public/images/        photos used on the site (team, hero, about section)
src/App.jsx           switches between sections and scrolls to top on change
src/components/       one .jsx + .css pair per section
  Header              logo, navigation, mobile menu
  Hero                home page
  ClausesSection      clause list and clause detail pages
  QuerySection        FAQs
  SuggestionsSection  feedback form and community guidelines
  TeamSection         team cards, profile pages, mission and values
  Footer
```

## Editing content

- **Clauses** are defined in `src/components/ClausesSection.jsx`.
- **Team members** (bio, roles, links, photo path) are in `src/components/TeamSection.jsx`. Put new photos in `public/images/`.
- **Navigation items** are the `NAV_ITEMS` list in `src/components/Header.jsx`.

## Deployment

Every push to `main` deploys automatically to Vercel, so anything pushed goes live within a minute or two.

## Contact

Email: thenikahnama.org@gmail.com
