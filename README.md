# shayankhodabakhsh.com

Personal academic site. Plain HTML and CSS, no build step.

- `site/` is the whole website. Edit the `.html` files directly.
  - `index.html`, `publications/`, `projects/`, `news/`: pages
  - `assets/css/site.css`: styles (light and dark mode)
  - `assets/pdf/CV_Khodabakhsh.pdf`: public CV
  - `CNAME`: custom domain (keep this file)
- Pushing to `main` runs `.github/workflows/deploy.yml`, which publishes `site/` to the `gh-pages` branch.
- Preview locally: `python3 -m http.server 8000 --directory site`, then open http://localhost:8000.
- The previous al-folio version is saved as the git tag `al-folio-backup`.
