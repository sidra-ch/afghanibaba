# Deployment Guide for Vercel

This guide explains how to deploy the AfghaniBaba frontend to Vercel.

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Access to the GitHub repository

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import the `sidra-ch/afghanibaba` GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: Leave as default (Vercel will use vercel.json)
   - **Build Command**: Automatically configured via `vercel.json`
   - **Output Directory**: Automatically configured via `vercel.json`
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from repository root
vercel

# For production deployment
vercel --prod
```

## Project Configuration

The project is configured with the following files:

### `vercel.json`
Located at the repository root, this file configures:
- Build command: `cd frontend && npm install && npm run build`
- Output directory: `frontend/out`
- Custom commands for installation and development

### `frontend/next.config.ts`
Configures Next.js with:
- Static export (`output: "export"`)
- Trailing slashes for all routes
- React strict mode

## Build Process

The deployment follows these steps:
1. Install dependencies: `npm install` in the `frontend` directory
2. Build the static site: `npm run build`
3. Output generated in `frontend/out/`
4. Vercel serves the static files

## Verifying Deployment

After deployment:
1. Check the deployment URL provided by Vercel
2. Verify the homepage loads correctly
3. Check that images are displayed properly
4. Test navigation between pages
5. Ensure all routes work correctly

## Important Notes

- **Static Export**: This is a Next.js static export, meaning all pages are pre-rendered at build time
- **Images**: All images are in `frontend/public/assets/` and are automatically copied to the output
- **Fonts**: Google Fonts are loaded via CDN link in the HTML head
- **No Server-Side Rendering**: Since this is a static export, there's no server-side code execution
- **Routes**: All routes have trailing slashes (e.g., `/flights/` not `/flights`)

## Troubleshooting

### 404 Errors
- Ensure you're accessing routes with trailing slashes (e.g., `/flights/` not `/flights`)
- Check that the `vercel.json` is at the repository root
- Verify the build completed successfully in the Vercel deployment logs

### Images Not Loading
- Check browser console for 404 errors on image paths
- Verify images exist in `frontend/public/assets/img/`
- Ensure image paths start with `/assets/` (not `/public/assets/`)

### Build Failures
- Check Vercel deployment logs for specific error messages
- Verify `package.json` dependencies are correct
- Ensure `npm install && npm run build` works locally

## Local Development

To run the project locally:

```bash
cd frontend
npm install
npm run dev
```

The development server will start at http://localhost:3000

## Support

For issues or questions:
- Check Vercel deployment logs
- Review the repository README
- Open an issue in the GitHub repository
