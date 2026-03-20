# Simandhar Print N Pack — Website

**Live at:** [simandharprintnpack.in](https://simandharprintnpack.in)

Hosted on GitHub Pages. Domain managed on GoDaddy.

## Quick Start

Just open `index.html` in a browser to preview locally.

## Before Going Live — Checklist

- [ ] Replace `+91 99999 99999` with actual phone number (search all .html files)
- [ ] Replace `info@simandharprintnpack.in` with actual email
- [ ] Add actual logo image to `images/logo.png`
- [ ] Add hero image to `images/hero.jpg`
- [ ] Add product thumbnail images to `images/products/`
- [ ] Add gallery images to `images/gallery/`
- [ ] Set up Formspree: go to formspree.io → create form → replace `YOUR_FORM_ID` in contact.html
- [ ] Update Google Maps embed in contact.html with correct coordinates
- [ ] Update GoDaddy DNS to point to GitHub Pages (see below)

## GitHub Pages Setup

1. Push this folder to a GitHub repo named `simandharprintnpack`
2. Go to repo Settings → Pages → Source: `main` branch, `/ (root)`
3. GitHub will publish at `https://yourusername.github.io/simandharprintnpack`
4. The `CNAME` file is already configured for `simandharprintnpack.in`

## GoDaddy DNS Setup

In GoDaddy DNS settings, add these records:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | yourusername.github.io.  |

SSL is automatic via GitHub Pages (free HTTPS).

## File Structure

```
index.html          ← Home page
contact.html        ← Contact page
CNAME               ← Domain config for GitHub Pages
css/style.css       ← All styles
js/main.js          ← Mobile nav, animations, form
images/             ← All images go here
products/           ← 6 product catalog pages
```
