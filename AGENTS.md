# Repository Guidelines

## Project Structure & Module Organization

The canonical application lives in `frontend/` and is an Astro static site. The portfolio is not implemented yet; the current Astro page is still the generated starter screen.

- `frontend/src/pages/index.astro` is the application entry point.
- `frontend/src/layouts/` contains document-level layout and metadata.
- `frontend/src/components/` contains page and UI components.
- `frontend/public/` contains files served at the site root, such as favicons.
- `frontend/src/assets/` contains assets imported and processed by Astro.
- `docs/starter-code/` contains the supplied portfolio brief, reference HTML, images, icons, and fonts. Treat it as source material until those assets are deliberately moved into `frontend/`.
- `docs/implementation-workflow/` is separate documentation and CLI tooling; it is not part of the deployed portfolio.

Keep the portfolio page organized into semantic sections such as `header`, `main`, `#projects`, `#contact`, and `footer`. Keep styles close to their Astro component or in a clearly named shared stylesheet. Use two-space indentation for HTML/CSS and preserve supplied asset filenames unless an asset replacement is intentional.

Do not add a second root `index.html`, a separate framework, or a new build layer. Resolve the source-of-truth question in favor of `frontend/` unless the task explicitly changes the project architecture.

## Build, Test, and Development Commands

Run application commands from `frontend/` with the WSL-managed Node runtime:

```bash
source ~/.nvm/nvm.sh
pnpm install
pnpm dev
pnpm build
```

The production build should complete and generate exactly one static page in `frontend/dist/`. If the shell resolves `pnpm` through the Windows Corepack installation and it cannot open its package-manager database, use the already-installed local CLI for verification:

```bash
source ~/.nvm/nvm.sh
./node_modules/.bin/astro build
```

For visual changes, serve the `frontend/` app and check desktop, tablet, and mobile widths. There is currently no automated test suite, linter, or accessibility checker configured. At minimum, run the production build, `git diff --check`, and manual keyboard/accessibility checks before committing.

## Development Environment

The host system is Windows, but development commands run inside WSL 2. The repository is available at `/home/fer/code/Single-page developer portfolio/single-page-developer-portfolio`; use Linux paths and WSL tools for project work.

Verified WSL tools:

- Git 2.43.0
- DDEV v1.25.2
- Docker CLI 29.6.1
- Python 3.12.3
- NVM 0.40.4 at `~/.nvm/nvm.sh`
- Node.js v24.18.0 and npm 11.16.0 when NVM is loaded
- pnpm 11.9.0 through Corepack when NVM is loaded; the wrapper may resolve to the Windows installation

NVM is installed but is not available until `~/.nvm/nvm.sh` is sourced. Load it before Node-based work:

```bash
. ~/.nvm/nvm.sh
```

The shell may otherwise resolve the Windows npm shim at `/mnt/c/Program Files/nodejs/npm`; prefer the NVM-managed WSL installation. PHP, Composer, yarn, Go, Rust, Java, and pip3 were not found in WSL when checked.

## Coding Style & Naming Conventions

Use two-space indentation in HTML and CSS. Prefer semantic HTML and a logical heading hierarchy. Keep CSS selectors class-based and component-oriented; use lowercase kebab-case names such as `.project-card` and `.contact-form`.

Place responsive overrides near the component they adjust and reuse declared CSS custom properties and typography/color tokens. Use Astro components for static composition and add client-side JavaScript only when progressive enhancement or form behavior requires it. Do not introduce a client framework for static content without a concrete need.

## Testing Guidelines

Before committing, verify the Astro production build and manually check:

- navigation links, project links, and form controls are keyboard accessible;
- the page has one clear `h1`, meaningful section headings, visible focus states, and sufficient color contrast;
- every informative image has useful `alt` text and every decorative image uses empty `alt` text;
- the layout has no horizontal overflow at narrow, medium, and wide viewport sizes;
- the contact form uses associated labels, appropriate input types, `required` constraints, useful autocomplete values, and clear validation feedback;
- the browser console has no errors and external links point to real destinations.

The README describes form validation and enquiry storage as product requirements. Do not consider the contact section complete until the form has both accessible validation and a deliberately chosen submission/storage endpoint.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects consistent with the repository history, such as `Add responsive project cards` or `Fix contact form spacing`. Keep each commit focused on one change.

Pull requests should explain the user-visible result, link the relevant issue when one exists, and include before/after screenshots for UI changes. Mention the viewport sizes and browsers checked, plus any intentional deviations from the design.

## Asset & Configuration Care

Do not commit local editor settings, generated screenshots, `frontend/dist/`, or machine-specific configuration. Optimize new image assets before adding them and verify that referenced asset paths use the repository’s existing casing. Keep the supplied portfolio assets in `docs/starter-code/` until they are intentionally integrated into `frontend/`.
