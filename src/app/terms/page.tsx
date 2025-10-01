import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const sections = [
  {
    title: 'Program Eligibility',
    body: `Participation is limited to approved dealers who meet GE Smart Home and Savant qualification criteria. You are responsible for providing accurate information during onboarding and maintaining required licenses and insurance.`
  },
  {
    title: 'Use of Materials',
    body: `Logos, marketing assets, and technical resources are provided solely to support authorized GE Smart Home sales and installations. Do not modify or redistribute materials without written approval.`
  },
  {
    title: 'Orders & Pricing',
    body: `Dealer pricing, promotional incentives, and volume rebates are confidential. Orders are subject to acceptance based on availability and program standing. Additional terms may apply to specific product categories.`
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by law, GE Smart Home and Savant are not liable for indirect or consequential damages arising from your participation in the dealer program.`
  },
  {
    title: 'Governing Law',
    body: `These terms are governed by the laws of the Commonwealth of Massachusetts, USA. Disputes will be handled in state or federal courts located in Boston, Massachusetts.`
  }
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl font-semibold text-savant-gray">Terms of Use</h1>
          <p className="mt-4 text-base text-neutral-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="mt-6 text-base text-neutral-600">
            These terms govern your access to GE Smart Home dealer resources, marketing materials, and partner tools. By applying to or participating in the program you agree to these conditions.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map(section => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-savant-gray">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-savant-gray">Questions?</h2>
            <p className="mt-3 text-base text-neutral-600">
              Contact your partner strategist or email <a href="mailto:partnersupport@gesmarthome.com" className="text-ge-blue underline">partnersupport@gesmarthome.com</a> for clarification regarding these terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
