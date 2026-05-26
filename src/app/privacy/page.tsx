import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rental Insurance NZ',
  description: 'How RentalInsurance.co.nz collects, uses, and protects your personal information under the NZ Privacy Act 2020.',
  alternates: { canonical: 'https://www.rentalinsurance.co.nz/privacy/' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'May 2026'

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-emerald-100 text-lg">
            How we collect, use, and protect your personal information
          </p>
          <p className="text-emerald-200 text-sm mt-3">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
              <p>
                RentalInsurance.co.nz is operated by Cover4You, a referral service that connects renters and tenants in New Zealand with licensed insurance advisers. We are committed to protecting your privacy and handling your personal information in accordance with the <strong>Privacy Act 2020 (NZ)</strong>.
              </p>
              <p className="mt-3">
                For privacy enquiries, contact us at:{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-medium">
                  hello@cover4you.co.nz
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p>We collect information you provide directly when requesting a quote or contacting us:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-slate-600">
                <li>Full name and contact details (email address, phone number)</li>
                <li>Rental property type and location</li>
                <li>Estimated contents value and insurance needs</li>
                <li>Any other details you provide in your enquiry</li>
              </ul>
              <p className="mt-4">We also collect technical information automatically when you visit our site, including:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-slate-600">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website or search query</li>
                <li>Cookie and analytics data (see Section 6)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-slate-600">
                <li>Refer your enquiry to licensed insurance advisers who can provide quotes</li>
                <li>Contact you to follow up on your quote request</li>
                <li>Send you relevant information about rental insurance options</li>
                <li>Improve our website, content, and service quality</li>
                <li>Comply with our legal and regulatory obligations</li>
                <li>Detect and prevent fraud or misuse of our services</li>
              </ul>
              <p className="mt-4">
                We do <strong>not</strong> sell your personal information to third parties. Your details are shared only with licensed insurance advisers for the purpose of providing you with quotes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Sharing Your Information</h2>
              <p>
                When you submit a quote request, your personal information is shared with one or more licensed insurance advisers or brokers so they can contact you with insurance options. These advisers are bound by their own privacy and professional obligations under NZ law.
              </p>
              <p className="mt-3">
                We may also share information with trusted third-party service providers (such as form processing, analytics, or email services) who assist us in operating our website. These providers are contractually required to handle your data securely.
              </p>
              <p className="mt-3">
                We may disclose your information where required by law, court order, or to protect the rights and safety of our users.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfil the purposes described in this policy, and to comply with applicable legal requirements. Quote enquiry data is typically retained for up to 2 years. You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Cookies and Analytics</h2>
              <p>
                We use cookies and similar tracking technologies to improve your experience on our site. These help us understand how visitors use the site and allow us to make improvements. You can control cookie settings through your browser preferences.
              </p>
              <p className="mt-3">
                We may use analytics services such as Google Analytics, which collect aggregated and anonymised data about site usage. This data does not identify you personally.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Security</h2>
              <p>
                We take reasonable steps to protect your personal information from loss, misuse, and unauthorised access. Our website uses HTTPS encryption and our form submissions are processed securely. However, no internet transmission is completely secure and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Your Rights</h2>
              <p>Under the Privacy Act 2020, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-slate-600">
                <li>Request access to the personal information we hold about you</li>
                <li>Ask us to correct inaccurate or outdated information</li>
                <li>Request deletion of your personal information (subject to legal obligations)</li>
                <li>Withdraw consent to marketing communications at any time</li>
                <li>Make a complaint to the <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Office of the Privacy Commissioner</a> if you believe your privacy has been breached</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-medium">
                  hello@cover4you.co.nz
                </a>. We will respond within 20 working days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites, including insurance providers and advisers. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mt-8">
              <h3 className="font-bold text-slate-900 mb-2">Questions or Concerns?</h3>
              <p className="text-slate-600 text-sm">
                Contact our privacy team at{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-medium">
                  hello@cover4you.co.nz
                </a>. You can also view our{' '}
                <Link href="/terms/" className="text-emerald-600 hover:underline">Terms of Service</Link> and{' '}
                <Link href="/disclaimer/" className="text-emerald-600 hover:underline">Disclaimer</Link>.
              </p>
            </div>

            <p className="text-xs text-slate-400 mt-6">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>
    </>
  )
}
