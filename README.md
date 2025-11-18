# Portfolio Website

A modern, animated portfolio website built with Next.js, React, and Framer Motion featuring an earthy neutral color scheme.

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

