# Complete Ronas IT UI/UX Recreation Guide for GE Smart Home Dealer Website

## Overview: What Makes Ronas IT's Design Exceptional

Ronas IT employs a **minimalist, content-forward design** with exceptional whitespace management, numbered section navigation, subtle scroll-triggered animations, and a professional grid-based layout. Here's how to replicate every element for your GE Smart Home dealer recruitment site.

---

## 1. DESIGN SYSTEM FOUNDATION

### Color Palette Adaptation

**Ronas IT Pattern:**
- Primary: Dark blue/navy (#1A1A2E or similar)
- Secondary: White/off-white (#FFFFFF, #F9F9F9)
- Accent: Bright blue (#0066FF) for CTAs and highlights
- Text: Dark gray (#333333) for body, black for headers
- Backgrounds: Alternating white and light gray sections

**GE Smart Home Adaptation:**
```css
:root {
  /* Primary Colors */
  --ge-blue: #0077C8;           /* GE brand blue */
  --savant-dark: #1A1F2E;       /* Deep navy for headers */
  --white: #FFFFFF;
  --off-white: #F8F9FB;
  
  /* Accent Colors */
  --accent-gold: #F4A536;       /* Earnings/success highlights */
  --accent-green: #00B894;      /* Trust signals */
  
  /* Neutrals */
  --text-primary: #2D3436;      /* Body text */
  --text-secondary: #636E72;    /* Supporting text */
  --border-gray: #DFE6E9;       /* Subtle borders */
  --bg-section: #F8F9FB;        /* Alternating sections */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #0077C8 0%, #005A9C 100%);
  --gradient-dark: linear-gradient(135deg, #1A1F2E 0%, #2C3E50 100%);
}
```

### Typography System

**Ronas IT Pattern:**
- Headers: Large, bold, generous spacing
- Body: 18-20px, comfortable line height (1.6-1.8)
- Hierarchy: Clear size differences between levels
- Font: Modern sans-serif (Inter, SF Pro, or similar)

**GE Smart Home Implementation:**
```css
/* Typography Scale */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-primary);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: clamp(42px, 5vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: var(--savant-dark);
}

h2 {
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: var(--savant-dark);
}

h3 {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 16px;
  color: var(--savant-dark);
}

p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.large-text {
  font-size: 22px;
  line-height: 1.6;
  font-weight: 500;
}

.small-text {
  font-size: 16px;
  line-height: 1.6;
}
```

### Spacing System (8px Grid)

**Ronas IT Pattern:**
- Generous vertical spacing between sections (80-120px)
- Comfortable padding within containers (40-60px)
- Consistent margins throughout
- Whitespace is a design element

**GE Smart Home Implementation:**
```css
/* Spacing Scale */
:root {
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --space-4xl: 128px;
}

.section {
  padding: var(--space-4xl) 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-xl);
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 160px 0;
  }
}
```

---

## 2. HERO SECTION WITH RONAS IT STYLE

### Hero Layout Pattern

**Ronas IT Approach:**
- Minimal, text-focused hero
- Large headline with generous whitespace
- Single-line or two-line subtitle
- Clear CTA below
- NO background images or videos in hero (clean, focused)
- Height: ~70vh

**GE Smart Home Implementation:**

```html
<section class="hero">
  <div class="container">
    <div class="hero__content">
      <h1 class="hero__title">
        Build Profitable Smart Home<br>
        Businesses with GE
      </h1>
      <p class="hero__subtitle">
        Join 500+ authorized dealers earning 35-45% margins with comprehensive 
        support and America's most trusted lighting brand.
      </p>
      <div class="hero__cta">
        <a href="#apply" class="btn btn--primary">Become a Dealer</a>
        <a href="#calculator" class="btn btn--secondary">Calculate Earnings</a>
      </div>
      <div class="hero__trust-signals">
        <div class="trust-signal">
          <span class="trust-signal__value">Since 1878</span>
          <span class="trust-signal__label">Heritage</span>
        </div>
        <div class="trust-signal">
          <span class="trust-signal__value">500+</span>
          <span class="trust-signal__label">Dealers</span>
        </div>
        <div class="trust-signal">
          <span class="trust-signal__value">35-45%</span>
          <span class="trust-signal__label">Margins</span>
        </div>
        <div class="trust-signal">
          <span class="trust-signal__value">24/7</span>
          <span class="trust-signal__label">Support</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: var(--white);
  position: relative;
  padding: var(--space-4xl) 0;
}

.hero__content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.hero__title {
  font-size: clamp(48px, 6vw, 82px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: var(--savant-dark);
  animation: fadeInUp 0.8s ease-out;
}

.hero__subtitle {
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero__cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 64px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero__trust-signals {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 32px;
  padding-top: 48px;
  border-top: 1px solid var(--border-gray);
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.trust-signal {
  text-align: center;
}

.trust-signal__value {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: var(--ge-blue);
  margin-bottom: 8px;
}

.trust-signal__label {
  display: block;
  font-size: 14px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Fade-in animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 3. NUMBERED SECTIONS PATTERN

### Ronas IT's Signature Numbered Layout

**Pattern:**
- Large numbers (01, 02, 03) introduce each major section
- Number appears above section title
- Creates clear content hierarchy
- Helps users navigate long pages

**GE Smart Home Implementation:**

```html
<section class="section section--numbered" data-number="01">
  <div class="container">
    <div class="section__header">
      <span class="section__number">01</span>
      <h2 class="section__title">The Dealer Opportunity</h2>
      <p class="section__subtitle">
        Smart home market projected to reach $138B by 2026 with 15% annual growth.
      </p>
    </div>
    <div class="section__content">
      <!-- Content here -->
    </div>
  </div>
</section>

<section class="section section--numbered section--alt" data-number="02">
  <div class="container">
    <div class="section__header">
      <span class="section__number">02</span>
      <h2 class="section__title">Complete Support System</h2>
      <p class="section__subtitle">
        Everything you need to succeed, from training to technical support.
      </p>
    </div>
    <div class="section__content">
      <!-- Content here -->
    </div>
  </div>
</section>
```

```css
.section {
  padding: var(--space-4xl) 0;
  position: relative;
}

.section--alt {
  background: var(--bg-section);
}

.section__header {
  max-width: 800px;
  margin: 0 auto 80px;
  text-align: center;
}

.section__number {
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  color: var(--ge-blue);
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 16px;
}

.section__number::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: var(--ge-blue);
}

.section__title {
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 700;
  margin-bottom: 20px;
}

.section__subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Scroll-triggered animation */
.section[data-animated="true"] .section__header {
  animation: fadeInUp 0.8s ease-out;
}
```

---

## 4. SERVICE CARDS GRID (Ronas IT Style)

### Card Layout Pattern

**Ronas IT Approach:**
- Clean cards with subtle borders or shadows
- Icon/image at top
- Title and description
- Hover effect: subtle lift
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Equal heights

**GE Smart Home Implementation:**

```html
<div class="cards-grid">
  <div class="card">
    <div class="card__icon">
      <svg><!-- Technical Support Icon --></svg>
    </div>
    <h3 class="card__title">24/7 Technical Support</h3>
    <p class="card__description">
      Round-the-clock phone and chat support with 2-hour response guarantee.
      40+ field technicians nationwide.
    </p>
    <a href="#support" class="card__link">
      Learn More
      <svg class="arrow-icon"><!-- Arrow --></svg>
    </a>
  </div>
  
  <div class="card">
    <div class="card__icon">
      <svg><!-- Training Icon --></svg>
    </div>
    <h3 class="card__title">Comprehensive Training</h3>
    <p class="card__description">
      100+ video tutorials, regional workshops, and certification programs
      with CEU credits available.
    </p>
    <a href="#training" class="card__link">
      Learn More
      <svg class="arrow-icon"><!-- Arrow --></svg>
    </a>
  </div>
  
  <div class="card">
    <div class="card__icon">
      <svg><!-- Marketing Icon --></svg>
    </div>
    <h3 class="card__title">Marketing Support</h3>
    <p class="card__description">
      Virtual showroom, co-branded materials, and co-op advertising funds
      up to 3% of purchases.
    </p>
    <a href="#marketing" class="card__link">
      Learn More
      <svg class="arrow-icon"><!-- Arrow --></svg>
    </a>
  </div>
</div>
```

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 64px;
}

.card {
  background: var(--white);
  border: 1px solid var(--border-gray);
  border-radius: 16px;
  padding: 48px 32px;
  transition: all 0.3s ease;
  position: relative;
}

/* Ronas IT hover effect */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: var(--ge-blue);
}

.card__icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--off-white);
  border-radius: 12px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.card:hover .card__icon {
  background: var(--ge-blue);
  transform: scale(1.05);
}

.card:hover .card__icon svg {
  fill: white;
}

.card__icon svg {
  width: 32px;
  height: 32px;
  fill: var(--ge-blue);
  transition: all 0.3s ease;
}

.card__title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--savant-dark);
}

.card__description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: var(--ge-blue);
  text-decoration: none;
  transition: gap 0.3s ease;
}

.card__link:hover {
  gap: 12px;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.card__link:hover .arrow-icon {
  transform: translateX(4px);
}

/* Staggered entrance animation */
.card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }
```

---

## 5. SCROLL-TRIGGERED ANIMATIONS

### Ronas IT Animation Philosophy

**Pattern:**
- Subtle fade-in-up animations
- Triggered as elements enter viewport
- Staggered delays for grouped elements
- Smooth, not jarring
- Performance-optimized with Intersection Observer

**GE Smart Home Implementation:**

```javascript
// Intersection Observer for scroll animations
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.observerOptions
    );
    
    this.init();
  }
  
  init() {
    // Select all elements that should animate
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .card, .section__header, .testimonial'
    );
    
    animatedElements.forEach(el => {
      el.classList.add('fade-in-element');
      this.observer.observe(el);
    });
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Optional: Stop observing after animation
        // this.observer.unobserve(entry.target);
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});
```

```css
/* Fade-in animation base */
.fade-in-element {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-element.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animations for groups */
.cards-grid .card:nth-child(1) {
  transition-delay: 0s;
}

.cards-grid .card:nth-child(2) {
  transition-delay: 0.1s;
}

.cards-grid .card:nth-child(3) {
  transition-delay: 0.2s;
}

.cards-grid .card:nth-child(4) {
  transition-delay: 0.3s;
}

/* Subtle parallax effect (optional, Ronas-style) */
.parallax-element {
  transform: translateY(0);
  transition: transform 0.3s ease-out;
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .fade-in-element,
  .card,
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 6. TESTIMONIALS SECTION

### Ronas IT Pattern

**Approach:**
- Clean, minimal testimonial cards
- Client photo or logo
- Quote in larger text
- Name, title, company below
- Grid or slider layout
- Subtle background

**GE Smart Home Implementation:**

```html
<section class="section testimonials-section" data-number="04">
  <div class="container">
    <div class="section__header">
      <span class="section__number">04</span>
      <h2 class="section__title">What Dealers Are Saying</h2>
      <p class="section__subtitle">
        Real contractors sharing their experience with the GE Smart Home program.
      </p>
    </div>
    
    <div class="testimonials-grid">
      <div class="testimonial">
        <div class="testimonial__quote">
          "Adding GE Smart Home increased our revenue 40% in year one. 
          The Savant integration gives us a premium offering that closes consistently."
        </div>
        <div class="testimonial__author">
          <img src="john-martinez.jpg" alt="John Martinez" class="testimonial__photo">
          <div class="testimonial__info">
            <div class="testimonial__name">John Martinez</div>
            <div class="testimonial__title">Owner, Martinez Electrical</div>
            <div class="testimonial__location">Austin, TX</div>
          </div>
        </div>
        <div class="testimonial__badge">Gold Dealer</div>
      </div>
      
      <div class="testimonial">
        <div class="testimonial__quote">
          "GE Smart Home became our standard package. It adds $12K to home values 
          and costs us $4,500 — that's pure profit margin improvement."
        </div>
        <div class="testimonial__author">
          <img src="sarah-chen.jpg" alt="Sarah Chen" class="testimonial__photo">
          <div class="testimonial__info">
            <div class="testimonial__name">Sarah Chen</div>
            <div class="testimonial__title">CEO, Riverside Custom Homes</div>
            <div class="testimonial__location">Portland, OR</div>
          </div>
        </div>
        <div class="testimonial__badge">Platinum Dealer</div>
      </div>
      
      <div class="testimonial">
        <div class="testimonial__quote">
          "Savant integration with GE Lighting opened luxury whole-home projects 
          we couldn't bid on before. Our average project value tripled."
        </div>
        <div class="testimonial__author">
          <img src="michael-rodriguez.jpg" alt="Michael Rodriguez" class="testimonial__photo">
          <div class="testimonial__info">
            <div class="testimonial__name">Michael Rodriguez</div>
            <div class="testimonial__title">Founder, Premier Home Tech</div>
            <div class="testimonial__location">Scottsdale, AZ</div>
          </div>
        </div>
        <div class="testimonial__badge">Platinum Dealer</div>
      </div>
    </div>
  </div>
</section>
```

```css
.testimonials-section {
  background: var(--white);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 64px;
}

.testimonial {
  background: var(--off-white);
  border-radius: 16px;
  padding: 48px;
  position: relative;
  transition: all 0.3s ease;
}

.testimonial:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.testimonial__quote {
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 32px;
  position: relative;
  padding-left: 24px;
}

.testimonial__quote::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -8px;
  font-size: 48px;
  color: var(--ge-blue);
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial__author {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.testimonial__photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--white);
}

.testimonial__info {
  flex: 1;
}

.testimonial__name {
  font-size: 18px;
  font-weight: 600;
  color: var(--savant-dark);
  margin-bottom: 4px;
}

.testimonial__title {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 2px;
}

.testimonial__location {
  font-size: 14px;
  color: var(--text-secondary);
}

.testimonial__badge {
  display: inline-block;
  padding: 6px 12px;
  background: var(--accent-gold);
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 6px;
}
```

---

## 7. STATISTICS/NUMBERS SECTION

### Ronas IT Pattern

**Approach:**
- Clean grid of key metrics
- Large numbers with labels
- Minimal design, high impact
- Often 4-column layout
- Subtle animations

**GE Smart Home Implementation:**

```html
<section class="section stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat" data-count="500">
        <div class="stat__value">500+</div>
        <div class="stat__label">Authorized Dealers</div>
      </div>
      
      <div class="stat" data-count="87">
        <div class="stat__value">87%</div>
        <div class="stat__label">Revenue Growth Average</div>
      </div>
      
      <div class="stat" data-count="15000">
        <div class="stat__value">15,000+</div>
        <div class="stat__label">Projects Completed</div>
      </div>
      
      <div class="stat" data-count="92">
        <div class="stat__value">92%</div>
        <div class="stat__label">Would Recommend</div>
      </div>
    </div>
  </div>
</section>
```

```css
.stats-section {
  background: var(--gradient-dark);
  color: var(--white);
  padding: 96px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  text-align: center;
}

.stat {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.stat.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat__value {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 800;
  color: var(--white);
  line-height: 1;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #FFFFFF 0%, var(--accent-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat__label {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Counter animation */
@keyframes countUp {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

```javascript
// Animated counter for statistics
class StatCounter {
  constructor(element) {
    this.element = element;
    this.target = parseInt(element.dataset.count);
    this.valueElement = element.querySelector('.stat__value');
    this.hasAnimated = false;
  }
  
  animate() {
    if (this.hasAnimated) return;
    this.hasAnimated = true;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = this.target / steps;
    
    let current = 0;
    const counter = setInterval(() => {
      current += increment;
      if (current >= this.target) {
        this.valueElement.textContent = this.formatNumber(this.target);
        clearInterval(counter);
      } else {
        this.valueElement.textContent = this.formatNumber(Math.floor(current));
      }
    }, stepDuration);
  }
  
  formatNumber(num) {
    const originalText = this.valueElement.textContent;
    const hasPlus = originalText.includes('+');
    const hasPercent = originalText.includes('%');
    
    let formatted = num.toLocaleString();
    if (hasPlus) formatted += '+';
    if (hasPercent) formatted += '%';
    
    return formatted;
  }
}

// Initialize stat counters when visible
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = new StatCounter(entry.target);
      counter.animate();
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
  statObserver.observe(stat);
});
```

---

## 8. FAQ ACCORDION SECTION

### Ronas IT Pattern

**Approach:**
- Clean accordion with subtle borders
- Plus/minus icon toggle
- Smooth expand/collapse animation
- One question open at a time (optional)
- Full-width sections

**GE Smart Home Implementation:**

```html
<section class="section faq-section" data-number="05">
  <div class="container">
    <div class="section__header">
      <span class="section__number">05</span>
      <h2 class="section__title">Frequently Asked Questions</h2>
      <p class="section__subtitle">
        Everything you need to know about becoming a GE Smart Home dealer.
      </p>
    </div>
    
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>What are the actual profit margins?</span>
          <svg class="faq-icon">
            <use xlink:href="#icon-plus"></use>
          </svg>
        </button>
        <div class="faq-answer">
          <div class="faq-answer__content">
            <p>Product margins range from 35-45% depending on product category and dealer tier. 
            Smart bulbs and plugs typically earn 35-40% margins, while fixtures and switches 
            earn 38-45%. Whole-home Savant integration systems can earn up to 50% with volume rebates.</p>
          </div>
        </div>
      </div>
      
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>When do I get paid?</span>
          <svg class="faq-icon">
            <use xlink:href="#icon-plus"></use>
          </svg>
        </button>
        <div class="faq-answer">
          <div class="faq-answer__content">
            <p>We process payments weekly via direct deposit. Orders ship immediately, and payment 
            is processed the following week. No net-30 or net-60 waiting periods.</p>
          </div>
        </div>
      </div>
      
      <!-- More FAQ items -->
    </div>
  </div>
</section>
```

```css
.faq-section {
  background: var(--white);
}

.faq-list {
  max-width: 900px;
  margin: 64px auto 0;
}

.faq-item {
  border-bottom: 1px solid var(--border-gray);
}

.faq-question {
  width: 100%;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  color: var(--savant-dark);
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: var(--ge-blue);
}

.faq-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-question[aria-expanded="true"] .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}

.faq-question[aria-expanded="true"] + .faq-answer {
  max-height: 500px; /* Adjust based on content */
}

.faq-answer__content {
  padding-bottom: 32px;
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1.7;
}
```

```javascript
// FAQ Accordion functionality
class FAQAccordion {
  constructor(container) {
    this.container = container;
    this.items = container.querySelectorAll('.faq-item');
    this.init();
  }
  
  init() {
    this.items.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => this.toggle(item));
    });
  }
  
  toggle(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    // Optional: Close other items
    // this.closeAll();
    
    if (isExpanded) {
      question.setAttribute('aria-expanded', 'false');
      answer.style.maxHeight = null;
    } else {
      question.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  }
  
  closeAll() {
    this.items.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      question.setAttribute('aria-expanded', 'false');
      answer.style.maxHeight = null;
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-list');
  if (faqContainer) {
    new FAQAccordion(faqContainer);
  }
});
```

---

## 9. FOOTER (Ronas IT Style)

### Pattern

**Approach:**
- Clean, organized 4-column layout
- Company info, services, resources, contact
- Minimal design, plenty of whitespace
- Social media links
- Copyright and legal links at bottom

**GE Smart Home Implementation:**

```html
<footer class="footer">
  <div class="container">
    <div class="footer__main">
      <div class="footer__column">
        <div class="footer__logo">
          <img src="ge-smart-home-logo.svg" alt="GE Smart Home">
          <p class="footer__tagline">Powered by Savant</p>
        </div>
        <p class="footer__description">
          Building profitable smart home businesses with America's most trusted lighting brand since 1878.
        </p>
        <div class="footer__social">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg><!-- Facebook icon --></svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg><!-- LinkedIn icon --></svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <svg><!-- Twitter icon --></svg>
          </a>
          <a href="#" class="social-link" aria-label="YouTube">
            <svg><!-- YouTube icon --></svg>
          </a>
        </div>
      </div>
      
      <div class="footer__column">
        <h3 class="footer__title">Dealer Program</h3>
        <ul class="footer__links">
          <li><a href="#why-partner">Why Partner</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#success-stories">Success Stories</a></li>
          <li><a href="#apply">Become a Dealer</a></li>
        </ul>
      </div>
      
      <div class="footer__column">
        <h3 class="footer__title">Support</h3>
        <ul class="footer__links">
          <li><a href="#training">Training & Certification</a></li>
          <li><a href="#technical">Technical Support</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#dealer-login">Dealer Portal</a></li>
        </ul>
      </div>
      
      <div class="footer__column">
        <h3 class="footer__title">Contact</h3>
        <ul class="footer__contact">
          <li>
            <strong>Phone:</strong><br>
            1-800-GE-SMART
          </li>
          <li>
            <strong>Email:</strong><br>
            dealers@gesmarthome.com
          </li>
          <li>
            <strong>Address:</strong><br>
            673 US Hwy 1<br>
            Vero Beach, FL 32962
          </li>
        </ul>
      </div>
    </div>
    
    <div class="footer__bottom">
      <div class="footer__legal">
        <p>&copy; 2025 GE Smart Home. All rights reserved.</p>
        <ul class="footer__legal-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#accessibility">Accessibility</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

```css
.footer {
  background: var(--savant-dark);
  color: var(--white);
  padding: 80px 0 32px;
}

.footer__main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .footer__main {
    grid-template-columns: 1fr;
  }
}

.footer__logo {
  margin-bottom: 24px;
}

.footer__logo img {
  height: 40px;
  margin-bottom: 8px;
}

.footer__tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.footer__description {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
}

.footer__social {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--ge-blue);
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.footer__title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--white);
}

.footer__links,
.footer__contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__links li,
.footer__contact li {
  margin-bottom: 12px;
}

.footer__links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer__links a:hover {
  color: var(--white);
}

.footer__contact {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 1.6;
}

.footer__contact strong {
  color: var(--white);
  display: block;
  margin-bottom: 4px;
}

.footer__bottom {
  text-align: center;
}

.footer__legal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer__legal p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.footer__legal-links {
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__legal-links a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer__legal-links a:hover {
  color: var(--white);
}

@media (max-width: 768px) {
  .footer__legal {
    flex-direction: column;
    text-align: center;
  }
  
  .footer__legal-links {
    flex-direction: column;
    gap: 12px;
  }
}
```

---

## 10. BUTTON STYLES (Ronas IT)

### Button Pattern

**Approach:**
- Two main styles: Primary (filled) and Secondary (outline)
- Rounded corners (8-12px)
- Generous padding
- Smooth hover transitions
- Optional arrow icon

**GE Smart Home Implementation:**

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn--primary {
  background: var(--ge-blue);
  color: var(--white);
  border-color: var(--ge-blue);
}

.btn--primary:hover {
  background: #005A9C;
  border-color: #005A9C;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 119, 200, 0.3);
}

.btn--secondary {
  background: transparent;
  color: var(--ge-blue);
  border-color: var(--ge-blue);
}

.btn--secondary:hover {
  background: var(--ge-blue);
  color: var(--white);
  transform: translateY(-2px);
}

.btn--large {
  padding: 20px 40px;
  font-size: 18px;
}

.btn--full-width {
  width: 100%;
}

/* Button with arrow */
.btn--arrow::after {
  content: '→';
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.btn--arrow:hover::after {
  transform: translateX(4px);
}

/* Loading state */
.btn--loading {
  position: relative;
  pointer-events: none;
}

.btn--loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## 11. NAVIGATION BAR (Sticky with Scroll Effect)

### Ronas IT Pattern

**Approach:**
- Clean, minimal navigation
- Logo left, menu center or right
- Sticky on scroll with background change
- Smooth transitions
- Hamburger menu on mobile

**GE Smart Home Implementation:**

```html
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="navbar__inner">
      <a href="/" class="navbar__logo">
        <img src="ge-smart-home-logo.svg" alt="GE Smart Home">
      </a>
      
      <ul class="navbar__menu">
        <li><a href="#products">Products</a></li>
        <li><a href="#why-partner">Why Partner</a></li>
        <li><a href="#success-stories">Success Stories</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
      
      <div class="navbar__actions">
        <a href="#login" class="navbar__link">Dealer Login</a>
        <a href="#apply" class="btn btn--primary">Become a Dealer</a>
      </div>
      
      <button class="navbar__toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</nav>
```

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
  padding: 24px 0;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 16px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.navbar__logo img {
  height: 40px;
  transition: height 0.3s ease;
}

.navbar.scrolled .navbar__logo img {
  height: 32px;
}

.navbar__menu {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__menu a {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.navbar__menu a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--ge-blue);
  transition: width 0.3s ease;
}

.navbar__menu a:hover {
  color: var(--ge-blue);
}

.navbar__menu a:hover::after {
  width: 100%;
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.navbar__link {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar__link:hover {
  color: var(--ge-blue);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.navbar__toggle span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar__menu,
  .navbar__actions {
    display: none;
  }
  
  .navbar__toggle {
    display: flex;
  }
}
```

```javascript
// Navbar scroll effect
class Navbar {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.lastScroll = 0;
    this.init();
  }
  
  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }
  
  handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
    
    this.lastScroll = currentScroll;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Navbar();
});
```

---

## 12. COMPLETE RESPONSIVE SYSTEM

### Mobile Breakpoints

```css
/* Mobile First Approach */

/* Extra small devices (phones) */
@media (max-width: 575px) {
  .container {
    padding: 0 16px;
  }
  
  .section {
    padding: 64px 0;
  }
  
  h1 {
    font-size: 36px;
  }
  
  h2 {
    font-size: 28px;
  }
}

/* Small devices (landscape phones) */
@media (min-width: 576px) and (max-width: 767px) {
  .container {
    padding: 0 24px;
  }
}

/* Medium devices (tablets) */
@media (min-width: 768px) and (max-width: 991px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

/* Large devices (desktops) */
@media (min-width: 992px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Extra large devices (large desktops) */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
```

---

## 13. PERFORMANCE OPTIMIZATION

### Critical CSS Inline

```html
<head>
  <style>
    /* Critical above-the-fold CSS */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; }
    .hero { min-height: 70vh; display: flex; align-items: center; }
    /* ... more critical CSS */
  </style>
  
  <!-- Load full stylesheet async -->
  <link rel="preload" href="styles.css" as="style" 
        onload="this.onload=null;this.rel='stylesheet'">
</head>
```

### Lazy Loading Images

```html
<img 
  src="placeholder.jpg" 
  data-src="actual-image.jpg" 
  alt="Description"
  loading="lazy"
  class="lazy-image">
```

```javascript
// Lazy load images
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('.lazy-image').forEach(img => {
  imageObserver.observe(img);
});
```

---

## FINAL IMPLEMENTATION CHECKLIST

✅ **Design System**
- [ ] Color variables defined
- [ ] Typography scale implemented
- [ ] Spacing system (8px grid)
- [ ] Button styles created

✅ **Hero Section**
- [ ] Minimal, text-focused design
- [ ] Large headline with subtitle
- [ ] Dual CTAs
- [ ] Trust signals row

✅ **Numbered Sections**
- [ ] Section numbering (01, 02, 03)
- [ ] Consistent headers
- [ ] Alternating backgrounds

✅ **Card Grids**
- [ ] Clean card design
- [ ] Hover lift effect
- [ ] 3-column responsive layout
- [ ] Staggered animations

✅ **Testimonials**
- [ ] Quote with photo
- [ ] Author information
- [ ] Dealer badges
- [ ] Hover effects

✅ **Statistics**
- [ ] Large numbers
- [ ] Count-up animation
- [ ] Grid layout
- [ ] Gradient text effects

✅ **FAQ Accordion**
- [ ] Smooth expand/collapse
- [ ] Plus/minus icon
- [ ] Accessible (ARIA)
- [ ] Keyboard navigation

✅ **Footer**
- [ ] 4-column layout
- [ ] Social links
- [ ] Legal links
- [ ] Mobile responsive

✅ **Navigation**
- [ ] Sticky on scroll
- [ ] Background change
- [ ] Mobile hamburger
- [ ] Smooth transitions

✅ **Animations**
- [ ] Scroll-triggered fade-ins
- [ ] Staggered card entrances
- [ ] Hover effects
- [ ] Reduced motion support

✅ **Performance**
- [ ] Critical CSS inline
- [ ] Lazy loading images
- [ ] Intersection Observer
- [ ] Optimized assets

---

This guide provides the complete Ronas IT aesthetic adapted specifically for your GE Smart Home dealer recruitment website. The design prioritizes clarity, professionalism, and subtle sophistication — perfect for B2B contractor audiences while maintaining the visual polish that makes Ronas IT's work stand out.