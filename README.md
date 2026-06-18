# Nikolaj Dev Landing

Personal commercial landing page for Nikolaj Dev — websites, MVP, audits, bug fixing and AI-assisted workflow through ARGUS.

## About

This repository contains a static personal landing page for Nikolaj's commercial web development services. The site uses a light-tech commercial layout with a website assortment catalog, services, template cards, pricing windows and a lead form connected through Forminit.

## What The Site Sells

- Websites and business pages for small companies and local services.
- Landing pages focused on clear offers and lead requests.
- MVP / mini platforms with product logic, roles, chat, Firebase or similar infrastructure when needed.
- Project rescue, audit and bug fixing for projects that are stuck or unstable.
- AI-assisted workflow using Nikolaj's ARGUS approach.

## Main Services

- Start Landing
- Business Website
- Project Rescue / Audit
- MVP / Mini Platform
- Bug fixing
- AI-assisted workflow / ARGUS approach

## Portfolio

- **RemPro Renovation Landing** — ready demo landing for a construction / renovation business. It includes a local preview in `demos/rempro/index.html` and screenshots in `assets/img/rempro/`.
- **CzechTrip Tours Landing** — ready demo landing for tours and trips from Prague. It includes a local preview in `demos/czechtrip/index.html`.
- **PráceHub.cz** — main live product / portfolio case. It demonstrates real platform work with roles, chat, Firebase, PWA, Storage, Functions, users, UX, security and cost lessons.
- **ARGUS Control Room** — Nikolaj's internal local AI-assisted workflow/control system.
- **Cafe / Restaurant Landing**, **Construction / Renovation Concept**, **Delivery / Local Service** — demo concepts, not real client projects.
- **Website type catalog** — category cards for restaurants, renovation, tours, delivery, beauty, clinic, consulting, auto service, cleaning, real estate, education, MVP, audit and bug fixing.

## ARGUS Approach

ARGUS is not a public downloadable product. It is Nikolaj's internal AI-assisted workflow/control system, currently in active development and used in his own development process.

The core idea: AI can accelerate analysis and implementation, but important actions stay under human approval. The landing describes ARGUS as an internal working contour with reports, protocols, file control and approval discipline.

## Tech Stack

- HTML
- CSS
- JavaScript
- Responsive design
- Local image assets and portfolio screenshots/previews
- Modal windows for project previews, details, pricing, lead form and ARGUS explanation
- Full-page local demo templates for RemPro and CzechTrip
- Forminit lead form endpoint
- Optional later publishing through GitHub Pages or Firebase Hosting

## Local Run Instructions

Open `index.html` directly in a browser.

Optional:
- Open the folder in VS Code.
- Use Live Server if it is installed.

No backend, package install or secrets are required for the current version.

Note: `demos/rempro/index.html` is a large standalone demo file because it contains embedded images. It works for review, but can be optimized later before a public production release.

## Contact

Email: [nikyrchenko71@gmail.com](mailto:nikyrchenko71@gmail.com)

Telegram: [@pracehub](https://t.me/pracehub)

Facebook: [Facebook / Messenger](https://www.facebook.com/share/18hdnUyhLG/)

The contact form submits to Forminit endpoint `https://forminit.com/f/kshbr37bfe4`. Forminit dashboard redirect should point to the published `thank-you.html` URL.

## Status

Light-tech sales catalog version is ready for Nikolaj review. Commit, push or deploy should be done only after explicit approval.

Before publishing publicly:
- confirm Forminit notification email and redirect URL;
- confirm price ranges and public wording;
- optionally add more real demo templates for catalog categories;
- optimize the large RemPro demo HTML if repository size becomes important;
- verify no private information is present;
- choose GitHub Pages or a dedicated Firebase Hosting project.
