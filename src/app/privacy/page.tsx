import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const sections = [
  {
    title: 'Information We Collect',
    body: `We collect contact details, company information, and project insights that you provide through our dealer application and resource portals. We may also log usage data, device information, and communications with our partner success team.`
  },
  {
    title: 'How We Use Your Information',
    body: `Your data enables onboarding, account management, product fulfillment, marketing support, and legal compliance. We use it to deliver program updates, training invitations, and territory insights relevant to your business.`
  },
  {
    title: 'Sharing & Retention',
    body: `We share information with Savant and operational vendors strictly to support program delivery. Data is retained for as long as you maintain an active partnership or as required by law. Access is limited to authorized personnel.`
  },
  {
    title: 'Your Choices',
    body: `You can request access, updates, or deletion of your data by contacting partnersupport@gesmarthome.com. Marketing preferences can be adjusted through each email footer or by reaching out to your partner strategist.`
  }
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl font-semibold text-savant-gray">Privacy Policy</h1>
          <p className="mt-4 text-base text-neutral-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="mt-6 text-base text-neutral-600">
            GE Smart Home, powered by Savant, respects your privacy. This policy explains how we collect, use, and safeguard partner and applicant information across our websites, applications, and partner success channels.
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
            <h2 className="text-xl font-semibold text-savant-gray">Contact Us</h2>
            <p className="mt-3 text-base text-neutral-600">
              For privacy questions or to exercise your rights, email <a href="mailto:partnersupport@gesmarthome.com" className="text-ge-blue underline">partnersupport@gesmarthome.com</a> or call 1-800-GE-SMART.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
