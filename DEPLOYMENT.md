# Deployment Guide

This guide will help you publish your portfolio to GitHub and deploy it.

## Step 1: Initialize Git Repository (if not already done)

If you haven't initialized git yet, run:

```bash
git init
git branch -M main
```

## Step 2: Add Your Remote Repository

```bash
git remote add origin https://github.com/Mr-Hassan-Javaid/Hassan-Portfolio.git
```

## Step 3: Stage and Commit Your Files

```bash
git add .
git commit -m "Initial commit: Portfolio website with animations"
```

## Step 4: Push to GitHub

```bash
git push -u origin main
```

If you're using a different branch name (like `publish`), use:

```bash
git push -u origin publish
```

## Step 5: Deploy Your Portfolio

### Option A: Deploy with Vercel (Easiest - Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your repository: `Mr-Hassan-Javaid/Hassan-Portfolio`
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site will be live at: `https://hassan-portfolio.vercel.app` (or your custom domain)

**Benefits:**
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Optimized for Next.js

### Option B: Deploy with Netlify

1. Go to [netlify.com](https://www.netlify.com) and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

### Option C: Deploy to GitHub Pages (Requires Static Export)

If you want to use GitHub Pages, you'll need to configure Next.js for static export:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

2. Update `package.json` scripts:
```json
"scripts": {
  "build": "next build",
  "export": "next build"
}
```

3. Build and push:
```bash
npm run build
git add .
git commit -m "Configure for GitHub Pages"
git push
```

4. In GitHub repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `out` folder
   - Save

## Updating Your Portfolio

After making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

If using Vercel or Netlify, your site will automatically update!

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify all environment variables are set (if any)

### Deployment Issues
- Ensure your repository is public (for free hosting)
- Check build logs in your hosting platform
- Verify `package.json` has correct scripts

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

