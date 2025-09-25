# AWS Amplify Deployment Guide

## Prerequisites
- AWS Account with Amplify access
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ (specified in package.json)

## Deployment Steps

### 1. Connect Repository
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your Git provider and select the repository
4. Choose the branch (usually `main` or `master`)

### 2. Configure Build Settings
The `amplify.yml` file is already configured with:
- **App Root**: `apps/web-app`
- **Build Command**: `npm run build`
- **Artifacts**: `.next` directory
- **Node Version**: 18+ (specified in package.json)

### 3. Environment Variables (if needed)
Add any required environment variables in the Amplify console:
- Go to App Settings → Environment Variables
- Add variables like:
  - `NODE_ENV=production`
  - Any API keys or configuration values

### 4. Deploy
1. Review the build settings
2. Click "Save and deploy"
3. Monitor the build process in the console

## Build Configuration

### Current Settings
- **Framework**: Next.js 15.5.4
- **Build Command**: `npm run build`
- **Output**: Standalone build (optimized for deployment)
- **Caching**: Node modules and Next.js cache enabled

### Performance Optimizations
- **Image Optimization**: WebP and AVIF formats enabled
- **Package Optimization**: Framer Motion and Lucide React optimized
- **Static Generation**: All pages pre-rendered for optimal performance

## Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version (requires 18+)
2. **Missing Dependencies**: Ensure all packages are in `package.json`
3. **Memory Issues**: Amplify provides 8GB RAM by default

### Build Logs
- Check build logs in Amplify console for detailed error information
- Common fixes:
  - Update Node.js version
  - Clear cache and rebuild
  - Check for TypeScript errors

## Post-Deployment

### Custom Domain (Optional)
1. Go to Domain Management in Amplify console
2. Add your custom domain
3. Configure DNS settings as instructed

### Monitoring
- Use AWS CloudWatch for monitoring
- Set up alerts for build failures
- Monitor performance metrics

## File Structure
```
/
├── amplify.yml (Amplify configuration)
├── apps/web-app/ (Next.js application)
│   ├── package.json
│   ├── next.config.ts
│   ├── src/
│   └── public/
└── DEPLOYMENT.md (this file)
```

## Support
- AWS Amplify Documentation: https://docs.aws.amazon.com/amplify/
- Next.js Deployment: https://nextjs.org/docs/deployment
