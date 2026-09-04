# Firebase setup for BEZ ID

BEZ Studio uses Firebase only for account features in this pure HTML edition.

## Create the Firebase project

1. Open Firebase Console and create a project for BEZ Studio.
2. Add a **Web app** to the project.
3. Firebase will show a web configuration object containing values such as `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId` and `appId`.
4. Open `assets/js/config.js` and paste those values into the matching fields.

Firebase web configuration is public by design. Do **not** put a Firebase service-account/private key in this website.

## Enable accounts

In Firebase Console:

Authentication → Sign-in method → Email/Password → Enable

BEZ Studio will then support:

- 13+ signup DOB check in the browser
- email/password accounts
- email verification links
- sign in/out
- password-reset emails
- display-name changes
- account deletion

The entered birth date is used by BEZ Studio JavaScript for the 13+ calculation and is not sent to Firebase by this site.

## Authorized domains

Add the domain hosting the site to Firebase Authentication → Settings → Authorized domains.

For a GitHub Pages project this is usually:

`YOUR-USERNAME.github.io`

If you later use `bezstudio.com`, add that domain too.

## Email verification

Firebase sends a verification **link**, not the old BEZ six-digit SMTP code. This is intentional because GitHub Pages has no private server where a secure verification code could be generated and checked.

## Optional: Firebase Storage for game packages

1. Enable Firebase Storage.
2. Publish the rules from `firebase-storage.rules`.
3. Upload a game to a path such as `games/my-game/MyGame.zip`.
4. In `assets/data/games.json`, set:

```json
"storage_path": "games/my-game/MyGame.zip",
"download_url": ""
```

The included rules allow reads only when Firebase says the user is signed in and email verified. Writes are denied from the public website, so upload releases from your Firebase/GCP owner tools instead.

## Security warning

Never put these in HTML/JS/GitHub Pages:

- Gmail App Passwords
- normal email passwords
- Firebase service-account keys
- GitHub personal access tokens
- secret admin passwords

Anyone can view frontend source files.
