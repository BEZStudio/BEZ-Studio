# Add your games to BEZ Studio

The store starts empty on purpose.

## Step 1: Create cover art

Put the cover in `assets/img/covers/`, for example:

`assets/img/covers/space-runner.webp`

A 16:10 image works well.

## Step 2: Host the game build

### Simple/public option: GitHub Releases

Create a release in your GitHub repository and attach your `.zip`/installer. Copy the release asset URL into `download_url`.

This is easy, but the asset URL is public. BEZ Studio can require login before its button works, but it cannot stop somebody from sharing the direct GitHub URL.

### Account-gated option: Firebase Storage

Upload the package to Firebase Storage and put its path in `storage_path`. See `FIREBASE_SETUP.md` and `firebase-storage.rules`.

## Step 3: Create the game metadata

Open `publish.html` on your live site and fill in the Publisher Helper. It generates a JSON object for you.

Or copy the example from `assets/data/games.example.json`.

## Step 4: Edit `assets/data/games.json`

The file must contain a JSON array:

```json
[
  {
    "slug": "space-runner",
    "title": "Space Runner",
    "version": "1.0.0",
    "genre": "Arcade",
    "platform": "Windows",
    "developer": "BEZ Studio",
    "short_description": "Fast arcade space runs.",
    "long_description": "Your full description here.",
    "tags": ["Single-player", "Pygame"],
    "cover_image_url": "assets/img/covers/space-runner.webp",
    "release_date": "2026-09-04",
    "file_size_human": "84 MB",
    "download_url": "",
    "storage_path": "games/space-runner/SpaceRunner.zip"
  }
]
```

For a second game, add a comma between objects.

Commit the change to GitHub. GitHub Pages will redeploy the updated store.
