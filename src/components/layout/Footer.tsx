import Link from 'next/link'

const quickLinks = [
  { label: 'Program overview', href: '/program-tiers' },
  { label: 'Partner journey', href: '/partner-journey' },
  { label: 'Smart home experience', href: '/smart-home-experience' },
  { label: 'Apply Now', href: '/signup' }
]

const supportLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'FAQ', href: '/faq' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-blue-900/60 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 text-sm text-blue-100 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">GE Lighting × Savant</p>
          <p className="text-blue-200/80">
            © {currentYear} GE Lighting, a Savant company. All rights reserved.
          </p>
          <p className="text-blue-200/70">
            1975 Noble Road, Building 313, East Cleveland, OH 44112 USA · partnersupport@gesmarthome.com · 1-800-GE-SMART
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Navigation</p>
          <ul className="mt-4 space-y-3">
            {quickLinks.map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Support</p>
          <ul className="mt-4 space-y-3">
            {supportLinks.map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
