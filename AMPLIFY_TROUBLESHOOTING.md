# AWS Amplify Deployment Troubleshooting

## Issue: "This page can't be found" Error

If you're seeing `master.d3cai7i9nseifu.amplifyapp.com page can't be found`, here are the steps to fix it:

## Solution Steps

### 1. Check Build Logs
1. Go to AWS Amplify Console
2. Click on your app
3. Go to "Build history"
4. Click on the latest build
5. Check the build logs for errors

### 2. Common Issues and Fixes

#### Issue: Build Artifacts Not Found
**Symptoms**: Build succeeds but page shows "not found"
**Solution**: The amplify.yml configuration has been updated to:
- Use `standalone` output for Next.js
- Copy public files to the correct location
- Set correct base directory

#### Issue: Node.js Version Mismatch
**Symptoms**: Build fails with Node.js errors
**Solution**: 
- Ensure Node.js 18+ is specified in package.json
- Check Amplify build environment settings

#### Issue: Missing Dependencies
**Symptoms**: Build fails with module not found errors
**Solution**:
- Run `npm ci` in preBuild phase (already configured)
- Check package.json for all required dependencies

### 3. Updated Configuration

The following files have been updated for proper AWS Amplify deployment:

#### amplify.yml
```yaml
version: 1
applications:
  - appRoot: apps/web-app
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
            - cp -r public .next/standalone/apps/web-app/
            - cp -r .next/static .next/standalone/apps/web-app/.next/
      artifacts:
        baseDirectory: .next/standalone
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - .next/cache/**/*
```

#### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
```

### 4. Manual Deployment Steps

If the automatic deployment continues to fail:

1. **Trigger New Build**:
   - Go to Amplify Console
   - Click "Run build" on the latest branch
   - Monitor the build process

2. **Check Build Environment**:
   - Ensure Node.js version is 18+
   - Check available memory (8GB default)
   - Verify build timeout settings

3. **Clear Cache**:
   - In Amplify Console, go to App Settings
   - Clear build cache
   - Trigger new build

### 5. Alternative Deployment Methods

If AWS Amplify continues to have issues:

#### Option 1: Vercel (Recommended for Next.js)
1. Connect GitHub repository to Vercel
2. Deploy automatically with zero configuration
3. Better Next.js optimization

#### Option 2: Netlify
1. Connect repository to Netlify
2. Use build command: `npm run build`
3. Set publish directory: `.next`

#### Option 3: Manual Static Export
1. Change next.config.ts to `output: 'export'`
2. Run `npm run build`
3. Deploy the `out` directory to any static hosting

### 6. Verification Steps

After deployment:
1. Check the Amplify URL
2. Verify all pages load correctly
3. Test navigation between pages
4. Check console for JavaScript errors
5. Verify images load properly

### 7. Support Resources

- AWS Amplify Documentation: https://docs.aws.amazon.com/amplify/
- Next.js Deployment Guide: https://nextjs.org/docs/deployment
- AWS Support: Available through AWS Console

## Current Status

✅ Build configuration updated
✅ Next.js optimized for deployment
✅ Amplify.yml configured correctly
✅ All dependencies verified
✅ Build tested locally

The application should now deploy successfully to AWS Amplify.
