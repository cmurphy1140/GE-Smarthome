import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-blue-900/60 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-blue-100 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">GE Lighting × Savant</p>
          <p className="mt-2 text-blue-200/80">
            © {new Date().getFullYear()} GE Lighting, a Savant company. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-blue-100">
          <Link href="/learning-guide" className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-white">
            Program pillars
          </Link>
          <a href="#journey" className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-white">
            Partner journey
          </a>
          <Link href="/learning-guide" className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-white">
            Learning guide
          </Link>
          <Link href="/signup" className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-white">
            Apply now
          </Link>
        </div>
      </div>
    </footer>
  )
}
