# Portfolio Website

A modern, animated portfolio website built with Next.js, React, and Framer Motion featuring an earthy neutral color scheme.

🔗 **Live Site**: [View Portfolio](https://mr-hassan-javaid.github.io/Hassan-Portfolio)  
📦 **Repository**: [GitHub](https://github.com/Mr-Hassan-Javaid/Hassan-Portfolio)

## Features

- **Hero Section** - Animated introduction with call-to-action
- **Thinking Section** - Narrative about the approach to design
- **Process Section** - Four-step journey from chaos to clarity
- **Proof Section** - Case studies showcasing real results
- **Capabilities Section** - Core competencies display
- **CTA Section** - Final call-to-action with email form modal
- **Email Modal** - Contact form with validation

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Framer Motion (animations)
- CSS Modules

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and color tokens
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── ThinkingSection.tsx # Thinking section
│   ├── ProcessSection.tsx  # Process steps
│   ├── ProofSection.tsx   # Case studies
│   ├── CapabilitiesSection.tsx # Capabilities list
│   ├── CTASection.tsx      # Final CTA
│   └── EmailModal.tsx     # Contact form modal
└── package.json
```

## Color Scheme

The website uses an earthy neutral palette:
- Earth tones (beige, tan, brown)
- Accent colors: Terracotta, Sage, Ochre
- Warm, professional aesthetic

## Customization

To customize the content, edit the component files in the `components/` directory. The color scheme can be adjusted in `app/globals.css` by modifying the CSS variables.

## Email Integration

The email form currently uses a mock submission. To integrate with a real email service:

1. Create an API route at `app/api/send-email/route.ts`
2. Update the `handleSubmit` function in `components/EmailModal.tsx` to call your API endpoint

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live in minutes!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mr-Hassan-Javaid/Hassan-Portfolio)

### Deploy to GitHub Pages

To deploy to GitHub Pages, you'll need to configure Next.js for static export:

1. Update `next.config.js` to enable static export
2. Update the build script in `package.json`
3. Push to your repository
4. Enable GitHub Pages in repository settings

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://www.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## License

This project is open source and available under the [MIT License](LICENSE).

