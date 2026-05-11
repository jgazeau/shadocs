# Contributing to Shadocs

Thank you for considering contributing to Shadocs, a multipurpose Hugo documentation theme! This guide explains how to set up a development environment, run tests, and submit your changes.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Running the Example Site](#running-the-example-site)
- [Testing](#testing)
- [Code Formatting](#code-formatting)
- [Submitting Changes](#submitting-changes)
- [Project Structure](#project-structure)

---

## Code of Conduct

Please be respectful and considerate in all interactions. Constructive feedback, bug reports, and pull requests are welcome.

---

## Prerequisites

Make sure the following tools are installed before working on the project:

| Tool                                             | Minimum version      | Notes                                             |
| ------------------------------------------------ | -------------------- | ------------------------------------------------- |
| [Hugo Extended](https://gohugo.io/installation/) | `0.158.0`            | **Extended** edition required (Dart Sass support) |
| [Dart Sass](https://sass-lang.com/install/)      | any recent           | Used for SCSS compilation                         |
| [Go](https://go.dev/doc/install)                 | `1.25`               | Required for Hugo module management               |
| [Node.js](https://nodejs.org/)                   | LTS                  | Required for tooling and end-to-end tests         |
| npm                                              | bundled with Node.js | Package manager                                   |

---

## Getting Started

1. **Fork** the repository on GitHub and **clone** your fork:

   ```bash
   git clone https://github.com/<your-username>/shadocs.git
   cd shadocs
   ```

2. Install Node.js dependencies:

   ```bash
   npm install
   ```

---

## Development Workflow

The theme is developed alongside its example site located in `exampleSite/`. Any layout, shortcode, asset, or i18n change you make to the theme is immediately reflected when the example site is served.

### Serving the example site locally

```bash
hugo -s exampleSite/ serve
```

This starts Hugo in development mode at <http://localhost:1313> with live rebuild enabled.

---

## Running the Example Site

The example site (`exampleSite/`) acts as the live documentation and the test bed for the theme. It demonstrates every feature and shortcode. When adding a new feature, consider adding a corresponding example page under `exampleSite/content/`.

To build the example site statically:

```bash
hugo -s exampleSite
```

The output is written to `exampleSite/public/`.

---

## Testing

The project uses two levels of automated testing:

### 1. Link checking

After building the example site, internal links are validated with [htmltest](https://github.com/wjdp/htmltest):

```bash
hugo -s exampleSite -b http://localhost:1313
htmltest
```

### 2. End-to-end tests (Cypress)

Browser-based tests are located in `cypress/e2e/` and cover global UI components as well as individual shortcodes.

Run all tests against all supported browsers (requires the dev server to be running):

```bash
npm run cy:run           # default browser
npm run cy:run:chrome
npm run cy:run:firefox
npm run cy:run:edge
```

Open the interactive Cypress test runner:

```bash
npm run cy:open
```

Both commands above automatically start and stop the Hugo development server via `start-server-and-test`.

When adding a new shortcode or feature, add a corresponding test file in the appropriate `cypress/e2e/` subdirectory:

- `cypress/e2e/global/` — theme-wide UI features (navbar, sidebar, search, …)
- `cypress/e2e/pages/` — full page tests
- `cypress/e2e/shortcodes/` — individual shortcode behaviour

---

## Code Formatting

The project uses [Prettier](https://prettier.io/) to enforce consistent formatting across HTML, CSS/SCSS, JavaScript, and Go template files.

Check formatting:

```bash
npm run format:check
```

Apply formatting:

```bash
npm run format:write
```

Please run `npm run format:write` before opening a pull request.

---

## Submitting Changes

1. Create a **feature branch** from `main`:

   ```bash
   git checkout -b feat/my-feature
   ```

2. Make your changes, add tests if applicable, and ensure formatting passes.

3. Verify the example site builds without errors:

   ```bash
   hugo -s exampleSite
   ```

4. Push your branch and open a **Pull Request** against `main`.

Pull requests trigger the full CI pipeline defined in `.github/workflows/branches.yml`:

- Hugo build (multiple Hugo versions)
- Link check
- End-to-end tests (Chrome, Firefox, Edge)

All checks must pass before a pull request can be merged.

---

## Project Structure

```
shadocs/
├── assets/               # Theme CSS (SCSS), JavaScript, and external libraries
│   ├── css/external/     # Vendor CSS (FontAwesome, Swagger UI, …)
│   ├── js/               # Theme JS, shortcode JS, and vendor JS
│   └── scss/theme/       # SCSS sources compiled at build time
├── cypress/              # End-to-end test suite (Cypress)
│   ├── e2e/              # Test specs (global, pages, shortcodes)
│   ├── fixtures/         # Static test fixtures
│   └── support/          # Cypress helpers and custom commands
├── data/                 # Theme default parameters (themeParams.toml)
├── exampleSite/          # Full demo site used as documentation and test bed
│   ├── content/          # Documentation pages (English + French)
│   ├── layouts/          # Site-level layout overrides
│   └── templates/        # Snippet templates
├── i18n/                 # Translation strings (de, en, fr, ja)
├── layouts/              # Theme layouts and shortcodes
│   ├── _default/         # Base templates (single, list, taxonomy, …)
│   ├── partials/         # Reusable partial templates
│   └── shortcodes/       # Hugo shortcodes provided by the theme
├── static/               # Static assets (fonts, images)
├── hugo.toml             # Hugo module configuration
├── theme.toml            # Theme metadata
└── package.json          # Node.js tooling configuration
```

---

## Useful Links

- [Hugo documentation](https://gohugo.io/documentation/)
- [Bulma CSS framework](https://bulma.io/) — the CSS base used by this theme
- [Cypress documentation](https://docs.cypress.io/)
- [Shadocs documentation site](https://jgazeau.github.io/shadocs/)
