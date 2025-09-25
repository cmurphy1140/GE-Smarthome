# GE Smarthome Partnership Platform

A modern, responsive web application built with Next.js for GE Lighting's smart home partnership program. This platform showcases the benefits of partnering with GE and Savant for dealers and trade professionals.

## 🚀 Live Demo

- **AWS Amplify**: [https://master.d3cai7i9nseifu.amplifyapp.com](https://master.d3cai7i9nseifu.amplifyapp.com)
- **GitHub Repository**: [https://github.com/cmurphy1140/GE-Smarthome](https://github.com/cmurphy1140/GE-Smarthome)

## ✨ Features

### 🏠 Homepage
- **Hero Section**: Compelling value proposition with call-to-action
- **Program Pillars**: Key partnership benefits with glass morphism design
- **Statistics**: Impressive partnership metrics and achievements
- **Partner Journey**: Interactive "Connect. Enable. Scale." process visualization
- **Benefits Section**: Comprehensive dealer benefits with interactive categories
- **FAQ Section**: Common questions with expandable answers
- **ROI Calculator**: Interactive tool to calculate potential revenue increases

### 📚 Learning Guide Page
- **Product Families**: GE Proseo and Savant product overview
- **Market Position**: Competitive advantages and market insights
- **Dealer Tiers**: Partnership levels and requirements
- **Professional Segments**: Target audience and use cases

### 📋 Program Details Page
- **Partnership Journey**: Detailed step-by-step process
- **Tailored Enablement**: Support and training programs
- **Floating Elements**: Animated logos and trade icons

### 📝 Signup Page
- **Application Form**: Streamlined partner registration
- **Benefits Overview**: Key partnership advantages

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety throughout
- **Deployment**: AWS Amplify with standalone build

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Modern UI**: Clean, professional interface with blue gradient themes
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Glass Morphism**: Contemporary design elements for visual appeal
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📁 Project Structure

```
/
├── apps/web-app/                 # Next.js application
│   ├── src/
│   │   ├── app/                 # App Router pages
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── learning-guide/  # Learning guide page
│   │   │   ├── program-details/ # Program details page
│   │   │   └── signup/          # Signup page
│   │   ├── components/          # Reusable components
│   │   │   ├── layout/          # Header, Footer
│   │   │   ├── sections/        # Page sections
│   │   │   ├── ui/              # UI components
│   │   │   └── common/          # Shared utilities
│   │   └── styles/              # Global styles
│   ├── public/                  # Static assets
│   ├── package.json
│   ├── next.config.ts
│   └── tailwind.config.js
├── amplify.yml                  # AWS Amplify configuration
├── DEPLOYMENT.md               # Deployment guide
├── AMPLIFY_TROUBLESHOOTING.md  # Troubleshooting guide
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cmurphy1140/GE-Smarthome.git
   cd GE-Smarthome
   ```

2. **Install dependencies**
   ```bash
   cd apps/web-app
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

### AWS Amplify (Current)
The app is configured for AWS Amplify deployment with:
- Standalone Next.js build
- Optimized for static hosting
- Automatic deployments from GitHub

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Alternative Platforms
- **Vercel**: Zero-config deployment (recommended for Next.js)
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting option

## 📊 Performance

- **First Load JS**: ~158kB
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: WebP and AVIF formats
- **Bundle Optimization**: Tree-shaking and code splitting
- **Caching**: Long-term cache headers for assets

## 🎯 Key Sections

### Partner Journey
Interactive visualization showing the three-step process:
1. **Connect**: Build trade network with certified professionals
2. **Enable**: Equip partners with training and tools
3. **Scale**: Grow together with data-driven insights

### Benefits Calculator
Interactive ROI calculator allowing dealers to:
- Input monthly projects and values
- Calculate potential revenue increases
- See margin improvements
- Estimate annual benefits

### Responsive Navigation
- Desktop: Full navigation with dropdown menus
- Mobile: Collapsible hamburger menu
- Curved rectangle buttons for modern appearance

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Tailwind CSS for styling

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to GE Lighting and Savant Systems.

## 📞 Support

For technical support or questions:
- Create an issue in this repository
- Contact the development team
- Check [AMPLIFY_TROUBLESHOOTING.md](./AMPLIFY_TROUBLESHOOTING.md) for deployment issues

---

**Built with ❤️ for GE Lighting × Savant Partnership Program**