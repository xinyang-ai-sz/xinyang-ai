# XinYang AI Website

## Deployment Guide

### Prerequisites
1. GitHub account
2. Git installed on your local machine
3. Node.js and pnpm installed

### GitHub Repository Setup
1. Create a new repository on GitHub (e.g., `xinyang-ai`)
2. Initialize Git in your project (if not already done):
   

### GitHub Pages Configuration
1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment":
   - Source: GitHub Actions
   - Branch: gh-pages (will be created automatically)

### Project Configuration
The project is already configured for GitHub Pages deployment with:
1. `vite.config.js` - Sets the base URL for GitHub Pages
2. `.github/workflows/deploy.yml` - GitHub Actions workflow for automated deployment
3. `package.json` - Contains necessary build scripts

### Deployment Process
1. Push your changes to the main branch:
   
2. The GitHub Actions workflow will automatically:
   - Build your project
   - Deploy to GitHub Pages
   - Make it available at: `https://YOUR_USERNAME.github.io/xinyang-ai/`

### Local Development
1. Install dependencies:
   
2. Start development server:
   
3. Build for production:
   
4. Preview production build:
   

### Troubleshooting
1. If pages don't load correctly, check if:
   - The repository name in `vite.config.js` matches your GitHub repository name
   - GitHub Pages is enabled in repository settings
   - The workflow has completed successfully
2. For 404 errors, ensure all routes are relative to the base URL
3. For build failures, check the Actions tab for error details

### Notes
- The site will be deployed to `https://YOUR_USERNAME.github.io/xinyang-ai/`
- Changes to the `main` branch will trigger automatic deployment
- Build artifacts are stored in the `gh-pages` branch