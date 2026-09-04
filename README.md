# BEZ Studio — GitHub Pages Edition

This folder is the pure static version of BEZ Studio. There is no Python, Node, PHP, database server, `.env`, SMTP password or private admin password in the website.

## What runs on GitHub Pages

- HTML pages
- CSS
- JavaScript
- Game catalog from `assets/data/games.json`
- Cover images
- News/legal/support pages
- Publisher metadata builder

## Real accounts

Real signup/login/email verification/password reset can be provided by Firebase Authentication from the browser. Configure `assets/js/config.js` and follow `FIREBASE_SETUP.md`.

The old Gmail SMTP/App Password setup is not used in this edition. Firebase sends verification/password-reset emails.

## Game downloads

Two modes are supported in `assets/data/games.json`:

1. `download_url` — easiest. Point to a GitHub Release or another file host. The website requires sign-in before showing/starting the download, but the actual URL is public and can be shared.
2. `storage_path` — use Firebase Storage. The included Storage rules require an authenticated, email-verified Firebase user before the site can request the file. This is better for an account-gated site, although a resolved download URL may still be shareable.

A completely unshareable/short-lived protected download system requires a backend or serverless function and therefore cannot be done by GitHub Pages alone.

## Publish

Upload every file/folder in this directory to the root of your GitHub repository, then enable GitHub Pages. See `GITHUB_PAGES_SETUP.md`.
