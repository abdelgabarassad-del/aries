# Four Years of You 💕

A romantic anniversary gift website with interactive polaroid gallery, flip cards, love letter reveal with floating hearts confetti, and an interactive anniversary question.

## Features

- **Heart Hero**: An animated beating heart cutout featuring her sweet smiling photo.
- **Polaroid Gallery**: 12 polaroid cards with custom captions, subtle tilt styling, and an interactive full-size lightbox viewer.
- **Interactive Flip Cards**: "Things 4 years taught me" - tap to reveal sweet notes.
- **Love Letter Reveal**: Opens an elegant love letter with falling floating hearts.
- **Playful Question**: A proposal for Year 5 with an evasive dodging "No" button and confetti celebration when "Yes" is clicked.
- **Environment Variables Support (`.env`)**: Easily customize or override image URLs/paths without modifying HTML.

---

## File Structure

```
aries/
├── .env                  # Environment configuration (active)
├── .env.example          # Environment variables template
├── env.js                # Client-side configuration
├── index.html            # Main website
├── vercel.json           # Vercel deployment configuration
├── images/               # Web-optimized HD images
│   ├── hero.jpg
│   ├── photo-1-smile.jpg
│   ├── photo-2-head-on-hand.jpg
│   ├── ...
│   └── originals/        # Backup of full-resolution original photos
└── api/
    └── config.js         # Optional Vercel serverless endpoint for env vars
```

---

## Configuring with `.env`

You can customize any photo URL or path in `.env` (or in the Vercel Dashboard under **Project Settings > Environment Variables**):

```env
HERO_IMAGE=images/hero.jpg

PHOTO_1=images/photo-1-smile.jpg
PHOTO_2=images/photo-2-head-on-hand.jpg
PHOTO_3=images/photo-3-thinking-face.jpg
PHOTO_4=images/photo-4-peace-sign.jpg
PHOTO_5=images/photo-5-pout-detected.jpg
PHOTO_6=images/photo-6-goth-princess.jpg
PHOTO_7=images/photo-7-poking-cheek.jpg
PHOTO_8=images/photo-8-pout-closeup.jpg
PHOTO_9=images/photo-9-telling-me.jpg
PHOTO_10=images/photo-10-mirror-selfie.jpg
PHOTO_11=images/photo-11-sleeves.jpg
PHOTO_12=images/photo-12-bathroom-runway.jpg
```

---

## Deploy to GitHub

In your project folder (`aries`), run:

```bash
git add .
git commit -m "Initial commit: Four years of you anniversary site"
git branch -M main
git remote add origin https://github.com/abdelgabarassad-del/aries.git
git push -u origin main
```

---

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New..."** > **"Project"**.
3. Select your repository: `abdelgabarassad-del/aries`.
4. Leave the Framework Preset as **Other** (it's a static site).
5. (Optional) If you want to use custom image URLs in `.env`, expand **Environment Variables** and paste them.
6. Click **Deploy**.

Your website will be live worldwide in seconds!
