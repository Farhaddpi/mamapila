# Mama Pila Website — V10

ONE bilingual site. The page loads in English; the EN / فارسی buttons in the
menu switch the whole page (text + right-to-left layout) instantly, with no
page reload. (fa.html simply redirects to index.html?lang=fa so old links work.)

## What changed in V10
1. Product package photo (used in the hero and the product section) is now the
   real photo you sent, with the background removed so it floats cleanly.
2. The site is now a single page; language switches in place via the EN/فارسی
   buttons (it remembers the last choice).
3. One phone number everywhere: 647 832 7100 (WhatsApp uses it too).
4. Gallery now uses your new photos (gallery1–gallery7); the watermark was
   trimmed from the food shots.
5. Facebook and LinkedIn removed. Only Instagram and TikTok remain:
   Instagram @mamapila.ca , TikTok @mamapila.ca
6. Speed: fonts load non-blocking, images have set dimensions and lazy-load,
   product videos load only on play. (The frying background video, the cooking
   videos and their music were left unchanged.)

## Files to upload (to repo root: farhaddpi/mamapila)
- index.html, fa.html, styles.css, script.js, README.md
- assets/  (the WHOLE folder)

assets:
  product-pack-clean.png, logo-label-small.jpg, logo-label.jpg, wordmark-cream.png,
  video-poster.jpg, label-wide-small.jpg, kotlet-video-1.mp4, kotlet-video-2.mp4,
  gallery1.jpg … gallery7.jpg

## IMPORTANT — upload so images & videos show
1. Extract this zip on your computer.
2. github.com/farhaddpi/mamapila  →  Add file  →  Upload files.
3. DRAG the whole `assets` folder into the box (do NOT click "choose your files"
   — that only takes single files). Drag the 5 root files too.
4. Wait for every file (especially the .mp4 videos) to finish, then Commit.
5. Wait ~1 minute and hard-refresh (Ctrl + Shift + R).

Test link (should show an image, not 404):
https://farhaddpi.github.io/mamapila/assets/logo-label-small.jpg

Site: https://farhaddpi.github.io/mamapila/

If dragging the folder still fails in your browser, GitHub Desktop is the most
reliable way to upload folders.

### About the speed score
The biggest remaining factor is the large hero/cooking videos (kept unchanged at
your request). If you later want a higher score, those can be re-compressed.
