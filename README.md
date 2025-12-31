# SkyLabs

A Next.js application built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd SkyLabs
npm install --legacy-peer-deps
```

### Development

```bash
cd SkyLabs
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
cd SkyLabs
npm run build
```

## Deployment

### Deploy to Netlify

This project is configured for deployment to Netlify. The configuration is specified in `netlify.toml` at the root of the repository.

#### Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Netlify will automatically detect the `netlify.toml` configuration
6. Click "Deploy site"

#### Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

The `netlify.toml` file contains all necessary build settings including:
- Base directory: `SkyLabs`
- Build command: `npm install --legacy-peer-deps && npm run build`
- Publish directory: `.next`
- Netlify Next.js plugin for optimized deployment

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form with Zod validation
- **Animation:** Framer Motion