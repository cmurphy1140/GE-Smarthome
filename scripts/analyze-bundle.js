#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Simple bundle analyzer for Next.js build output
function analyzeBundle() {
  const buildDir = path.join(process.cwd(), '.next')
  
  if (!fs.existsSync(buildDir)) {
    console.log('❌ No build found. Run "npm run build" first.')
    return
  }

  console.log('📊 Bundle Analysis Report')
  console.log('=' .repeat(50))

  // Analyze static pages
  const staticPagesDir = path.join(buildDir, 'static', 'chunks')
  
  if (fs.existsSync(staticPagesDir)) {
    const chunks = fs.readdirSync(staticPagesDir)
      .filter(file => file.endsWith('.js'))
      .map(file => {
        const filePath = path.join(staticPagesDir, file)
        const stats = fs.statSync(filePath)
        return {
          name: file,
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024 * 100) / 100
        }
      })
      .sort((a, b) => b.size - a.size)

    console.log('\n📦 JavaScript Chunks:')
    chunks.forEach(chunk => {
      const sizeColor = chunk.sizeKB > 100 ? '🔴' : chunk.sizeKB > 50 ? '🟡' : '🟢'
      console.log(`  ${sizeColor} ${chunk.name}: ${chunk.sizeKB} KB`)
    })

    const totalSize = chunks.reduce((sum, chunk) => sum + chunk.sizeKB, 0)
    console.log(`\n📈 Total JavaScript: ${totalSize.toFixed(2)} KB`)
  }

  // Analyze images
  const publicDir = path.join(process.cwd(), 'public')
  if (fs.existsSync(publicDir)) {
    const images = fs.readdirSync(publicDir)
      .filter(file => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file))
      .map(file => {
        const filePath = path.join(publicDir, file)
        const stats = fs.statSync(filePath)
        return {
          name: file,
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024 * 100) / 100
        }
      })
      .sort((a, b) => b.size - a.size)

    if (images.length > 0) {
      console.log('\n🖼️  Images:')
      images.forEach(image => {
        const sizeColor = image.sizeKB > 500 ? '🔴' : image.sizeKB > 100 ? '🟡' : '🟢'
        console.log(`  ${sizeColor} ${image.name}: ${image.sizeKB} KB`)
      })

      const totalImageSize = images.reduce((sum, image) => sum + image.sizeKB, 0)
      console.log(`\n📈 Total Images: ${totalImageSize.toFixed(2)} KB`)
    }
  }

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:')
  console.log('  • Enable gzip compression on your server')
  console.log('  • Use a CDN for static assets')
  console.log('  • Implement lazy loading for images')
  console.log('  • Consider using WebP format for images')
  console.log('  • Monitor Core Web Vitals in production')
  console.log('  • Use service workers for caching')
}

// Run analysis
analyzeBundle()
