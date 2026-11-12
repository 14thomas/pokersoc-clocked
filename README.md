# PokerSoc Shot Clock

A 30-second poker shot clock for the iPhone, in landscape. Installs from GitHub Pages as a Home Screen app and works offline.

## Use

- **Reset clock** restarts the timer at 30 s and starts it.
- **Tap anywhere else** pauses the timer (digits turn yellow). Tap again to resume.
- The last 5 s pulse and beep once a second; it beeps at 0.
- The clock faces the players (upside-down); the button faces the dealer.
- Bluetooth clicker / keyboard: Enter, arrows or Page Down reset; Space or Esc pause / resume.

## Deploy

1. Push this folder to a GitHub repo.
2. Settings → Pages → Deploy from a branch → `main` / `(root)`.
3. On the iPhone, open the Pages URL in Safari → Share → Add to Home Screen.
4. Turn off Portrait Orientation Lock (Control Centre) so it can rotate.

The icon is the PokerSoc logo (white on navy). If you change it, replace `apple-touch-icon.png` (180×180), `icon-192.png` and `icon.png` (512×512) — square, no transparency — *before* adding to the Home Screen. iOS keeps the icon it saw when you added it, so delete and re-add the app to pick up a new one.

## Notes

- **Screen stays on** automatically in Home Screen apps on iOS 18.4 or later. On older versions set Settings → Display & Brightness → Auto-Lock → Never for the night.
- **Sound:** the first tap after opening unlocks audio. Beeps play with the silent switch on.
- **Change the time:** `SHOT_SECONDS` in `index.html`.
- **Updates:** pushed changes show up on the second launch. To force them, bump `CACHE` in `sw.js`.

## Font

Campton (Medium and Bold) in `fonts/` is a commercial font and is not open source. A public repo and GitHub Pages site will serve those files to anyone. Check your licence covers web use, or keep the repo private.
