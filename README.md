# 🏠 GE Smarthome Dealer Program

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, high-performance web application showcasing GE's comprehensive smart home dealer partnership program. Built with Next.js 15, this platform enables dealers to explore partnership opportunities, access learning resources, and understand the benefits of joining GE's smart home ecosystem.

## ✨ Features

### 🎯 Core Functionality
- **Dealer Program Overview** - Comprehensive partnership details and benefits
- **Interactive Learning Guide** - Educational resources for dealers
- **Program Details** - Detailed information about partnership tiers
- **Dealer Signup** - Streamlined application process
- **ROI Calculator** - Interactive tool to calculate partnership returns
- **FAQ System** - Comprehensive question and answer interface

### 🚀 Performance & UX
- **Server-Side Rendering** - Optimized for SEO and performance
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion powered interactions
- **Glass Morphism UI** - Modern, elegant design system
- **Progressive Web App** - Service worker for offline functionality
- **Performance Monitoring** - Built-in performance tracking

### 🛠️ Developer Experience
- **TypeScript** - Full type safety and IntelliSense
- **ESLint Configuration** - Consistent code quality
- **Component Architecture** - Modular, reusable components
- **Optimized Builds** - Fast development and production builds

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** 
- **npm 8+** or **yarn**

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd GE-Smarthome

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
GE-Smarthome/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── signup/            # Dealer application
│   │   ├── learning-guide/    # Educational resources
│   │   └── program-details/   # Partnership details
│   ├── components/
│   │   ├── common/            # Shared utilities
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── OptimizedMotion.tsx
│   │   │   └── ServiceWorkerRegistration.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PillarsSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── RoiCalculatorSection.tsx
│   │   │   └── ...
│   │   └── ui/                # Reusable UI components
│   │       ├── FaqPopup.tsx
│   │       ├── AnimatedNumber.tsx
│   │       └── ...
│   ├── styles/                # Global styles
│   │   └── glass-morphism.css
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
├── scripts/                   # Build and analysis scripts
├── static-site/              # Static HTML fallback
└── docs/                     # Documentation
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Build and start production server
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
```

### Code Quality

- **TypeScript Strict Mode** - Ensures type safety
- **ESLint Configuration** - Consistent code style
- **Component Patterns** - Reusable, maintainable components
- **Performance Optimization** - Minimized bundle size and fast loading

### Development Guidelines

1. **Use Server Components** by default for better performance
2. **Client Components** only when interactivity is required
3. **Centralize Styles** in `src/app/globals.css` for consistency
4. **Validate Changes** with `npm run lint` before committing
5. **Follow TypeScript** best practices for type safety

## 🎨 Design System

### Color Palette
- **Primary**: Blue-950, Blue-900 (GE Brand Colors)
- **Accent**: Blue-600, Blue-500
- **Neutral**: White, Slate colors
- **Glass Effects**: White/90 with backdrop blur

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Optimized for readability
- **Responsive**: Scales appropriately across devices

### Components
- **Glass Morphism** - Modern, translucent design
- **Smooth Transitions** - 300ms duration for interactions
- **Hover Effects** - Scale and color transitions
- **Mobile-First** - Responsive breakpoints

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with value proposition
- Partnership benefits overview
- Interactive timeline (AboutSection)
- ROI calculator
- Partnership tiers
- FAQ system

### Learning Guide (`/learning-guide`)
- Educational resources
- Training materials
- Best practices
- Implementation guides

### Program Details (`/program-details`)
- Detailed partnership information
- Tier comparisons
- Requirements and benefits
- Application process

### Dealer Signup (`/signup`)
- Streamlined application form
- Qualification assessment
- Contact information capture
- Next steps guidance

## 🚀 Deployment

### Vercel (Recommended)

```bash
# First time setup
npx vercel login

# Deploy
npm run deploy:vercel
```

The `vercel.json` configuration handles build settings automatically.

### Self-Hosted

```bash
# Build the application
npm run build

# Copy necessary files to server
cp -r .next public package.json /path/to/server

# Install production dependencies
npm install --omit=dev

# Start production server
npm run start
```

### Docker

```bash
# Build Docker image
docker build -t ge-smarthome .

# Run container
docker run -p 3000:3000 ge-smarthome
```

## 📊 Performance

### Optimizations
- **Next.js 15** - Latest performance improvements
- **Image Optimization** - Automatic WebP conversion
- **Code Splitting** - Lazy loading of components
- **Bundle Analysis** - Regular size monitoring
- **Service Worker** - Offline functionality

### Monitoring
- Built-in performance monitoring
- Bundle size analysis with `npm run analyze`
- Lighthouse scores optimization
- Core Web Vitals tracking

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Standards
- Follow TypeScript best practices
- Write meaningful commit messages
- Ensure all tests pass
- Update documentation as needed

## 📄 License

This project is proprietary to GE and is not open for public contribution.

## 🆘 Support

For technical support or questions about the GE Smarthome Dealer Program:

- **Documentation**: Check the `/docs` folder
- **Issues**: Create an issue in the repository
- **Contact**: Reach out to the development team

---

**Built with ❤️ by the GE Smarthome Team**