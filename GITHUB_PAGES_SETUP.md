# Publish BEZ Studio with GitHub Pages

## 1. Create the repository

Create a new GitHub repository, for example `bez-studio`.

Upload the CONTENTS of this folder to the repository root. `index.html` should be directly visible at the root of the repo, not inside another folder.

Do not upload private passwords, Gmail App Passwords, `.env` files, Firebase service-account JSON files or GitHub personal access tokens.

## 2. Enable Pages

In the repository open:

Settings → Pages → Build and deployment

Choose **Deploy from a branch**, select your main branch and `/ (root)`, then Save.

GitHub will give you an address similar to:

`https://YOUR-USERNAME.github.io/bez-studio/`

The website uses project-relative links, so it is designed to work from a repository subfolder URL like this.

## 3. Set up accounts

Follow `FIREBASE_SETUP.md`. Until Firebase is configured, the store can be browsed but BEZ ID account actions intentionally show a setup error.

## 4. Add games

Follow `HOW_TO_ADD_GAMES.md`.

## 5. Custom domain later

You can add a custom domain from GitHub Pages settings. After changing domains, remember to add the new domain to Firebase Authentication's authorized domains.
