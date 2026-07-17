# Niche Crosswords

Mobile-first PWA prototype for random crossword puzzles by niche.

## Included

- Two free niche packs: DevOps and AI.
- Paid-locked niche packs including JW Study, Medical, Legal, Cybersecurity, Cloud, Sports, Computers, Art, Finance, Forex Trading, Netflix Movies & Series, Education, Music, Gaming, Food, Space, and Business.
- Interest input that recommends a niche from broad terms like sports, computers, art, forex, health, or business.
- Niche dropdown built to support a large library without filling the screen.
- Random crossword generation on every new puzzle.
- Easy, medium, and hard difficulty levels.
- Optional clues, hints, checking, reveal, timer, progress, and focus score.
- Live answer validation: correct letters turn green and wrong letters turn red while typing.
- Candy-style reward boost: every four solved words unlocks a few automatic bonus letters on empty cells.
- Offline-ready PWA manifest and service worker for Android browser install.
- Animated promo page at `ad-video.html` for recording a short launch video, including a realistic tap hand overlay and browser-generated arcade music.

## Run Locally

```bash
cd /Users/msray/Documents/Cloudy/MyPortfolio
python3 -m http.server 4173 --directory crossword-niche-app
```

Open `http://localhost:4173` on desktop, or open the machine IP on an Android device connected to the same network.

## Android Packaging Path

This prototype can ship as:

1. A PWA installed from Chrome on Android.
2. A Trusted Web Activity for Play Store distribution.
3. A Capacitor wrapper if native plugins are needed.

The current `Test unlock` button is a prototype hook. Replace it with Google Play Billing before publishing:

- Keep `pack.free` for the two free packs.
- Replace `state.fullAccess` with entitlement state returned from Play Billing.
- Store purchases server-side or verify purchase tokens before unlocking paid packs.

## Add More Niches

Add another object to `NICHE_PACKS` in `app.js` with:

- `id`
- `label`
- `free`
- `summary`
- `words`, where each entry is `[ANSWER, CLUE, LEVEL]`

Use `LEVEL` values of `1`, `2`, or `3` so the same pack can support easy, medium, and hard puzzles.
