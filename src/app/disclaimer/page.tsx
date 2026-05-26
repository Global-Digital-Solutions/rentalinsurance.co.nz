import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer | Rental Insurance NZ',
  description: 'Important information about how RentalInsurance.co.nz operates as a referral service, our regulatory status, and the general nature of content on this site.',
  alternates: { canonical: 'https://www.rentalinsurance.co.nz/disclaimer/' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'May 2026'

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-emerald-100 text-lg">
            Important information about our service and how we operate
          </p>
          <p className="text-emerald-200 text-sm mt-3">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. How We Operate</h2>
              <p>
                RentalInsurance.co.nz is operated by Cover4You, a locally owned &amp; operated referral and lead-generation service. Our service connects renters, tenants, and flatmates with licensed insurance advisers and brokers who can provide rental and contents insurance quotes.
              </p>
              <p className="mt-3">
                We are not an insurance provider, insurer, or underwriter. We do not issue, administer, or underwrite any insurance policy. When you submit an enquiry through this Site, your information is shared with one or more licensed insurance advisers who will contact you to discuss your needs and provide quotes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Regulatory Status</h2>
              <p>
                Cover4You operates as a referral service and is not itself licensed to provide regulated financial advice under the Financial Markets Conduct Act 2013 (FMCA). We do not provide personalised financial advice or recommendations.
              </p>
              <p className="mt-3">
                The insurance advisers and brokers we refer you to are licensed financial advice providers (FAPs) or authorised financial advisers regulated under the FMCA. They are bound by their own duty of care, disclosure obligations, and professional standards. Their regulatory status and relevant disclosure information will be provided to you when they make contact.
              </p>
              <p className="mt-3">
                If you have questions about an adviser's licence or regulatory status, you can search the Financial Service Providers Register at{' '}
                <a
                  href="https://fsp.govt.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  fsp.govt.nz
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. General Information Only</h2>
              <p>
                All content published on this Site — including articles, guides, comparisons, and policy summaries — is provided for general informational purposes only. It does not constitute financial advice, insurance advice, or a recommendation to purchase any specific product.
              </p>
              <p className="mt-3">
                Insurance products are complex and individual circumstances vary significantly. Before purchasing any insurance product, we strongly recommend you:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-slate-600">
                <li>Read the Product Disclosure Statement (PDS) provided by the insurer</li>
                <li>Consider your own financial circumstances and insurance needs</li>
                <li>Seek independent financial or insurance advice if you are unsure</li>
                <li>Review the policy wording carefully before purchasing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Accuracy of Content</h2>
              <p>
                We take reasonable care to ensure the information on this Site is accurate and current. However, insurance products, premiums, policy terms, and market conditions change frequently. We cannot guarantee that all information on this Site is complete, accurate, or up to date at any given time.
              </p>
              <p className="mt-3">
                Pricing information, coverage comparisons, and insurer details shown on this Site are indicative only and subject to change. Actual quotes will be provided by the licensed advisers we refer you to, based on your specific circumstances.
              </p>
              <p className="mt-3">
                We reserve the right to update, change, or remove content from this Site at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Compensation Disclosure</h2>
              <p>
                RentalInsurance.co.nz may receive referral fees or commissions from insurance advisers, brokers, or insurers when an enquiry or policy results from a referral through our Site. This compensation does not affect the cost of any insurance product to you — quotes are provided based on your individual risk profile and the insurer's standard pricing.
              </p>
              <p className="mt-3">
                Our editorial reviews, comparisons, and content are prepared independently and are not influenced by commercial relationships with insurers or advisers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Third-Party Content and Links</h2>
              <p>
                This Site may contain links to or information from third-party websites, insurers, and industry bodies. We are not responsible for the accuracy, content, or privacy practices of any third-party site. Links are provided for your convenience only and do not constitute an endorsement of the linked site or its content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Cover4You, its directors, employees, agents, and affiliates accept no liability for any loss or damage — whether direct, indirect, consequential, or otherwise — arising from your use of this Site, reliance on information published here, or decisions made on the basis of that information.
              </p>
              <p className="mt-3">
                Nothing in this disclaimer excludes or limits any rights you may have under the Consumer Guarantees Act 1993 or the Fair Trading Act 1986 that cannot lawfully be excluded.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Complaints and Dispute Resolution</h2>
              <p>
                If you have a complaint about our referral service, please contact us first:
              </p>
              <p className="mt-3">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-medium">
                  hello@cover4you.co.nz
                </a>
                <br />
                We will acknowledge your complaint within 5 working days and aim to resolve it within 20 working days.
              </p>
              <p className="mt-4">
                If your complaint relates to advice or a policy provided by an insurance adviser we referred you to, you should contact that adviser directly. Their dispute resolution process will be set out in the disclosure information they provide. If you remain unsatisfied, approved external dispute resolution schemes available in New Zealand include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-slate-600">
                <li>
                  <a
                    href="https://www.ifso.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    Insurance and Financial Services Ombudsman (IFSO)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fscl.org.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    Financial Services Complaints Ltd (FSCL)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Governing Law</h2>
              <p>
                This disclaimer and your use of this Site are governed by the laws of New Zealand. Any disputes will be subject to the exclusive jurisdiction of the New Zealand courts.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mt-8">
              <h3 className="font-bold text-slate-900 mb-2">Questions?</h3>
              <p className="text-slate-600 text-sm">
                Contact us at{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-medium">
                  hello@cover4you.co.nz
                </a>. You can also view our{' '}
                <Link href="/privacy/" className="text-emerald-600 hover:underline">Privacy Policy</Link> and{' '}
                <Link href="/terms/" className="text-emerald-600 hover:underline">Terms of Service</Link>.
              </p>
            </div>

            <p className="text-xs text-slate-400 mt-6">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>
    </>
  )
}
