import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Rental Insurance NZ',
  description: 'Terms of service for RentalInsurance.co.nz — understand how our no-fee rental insurance referral service works.',
  alternates: { canonical: 'https://www.rentalinsurance.co.nz/terms/' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'May 2026'

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-emerald-100 text-lg">
            Please read these terms carefully before using our service
          </p>
          <p className="text-emerald-200 text-sm mt-3">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using RentalInsurance.co.nz (the "Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site. These terms apply to all visitors, users, and others who access or use our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. About Our Service</h2>
              <p>
                RentalInsurance.co.nz is operated by Cover4You, a referral service that connects renters and tenants in New Zealand with licensed insurance advisers and brokers. We are not an insurance provider, underwriter, or insurer. We do not issue policies or handle claims.
              </p>
              <p className="mt-3">
                When you submit a quote request through our Site, your details are forwarded to one or more licensed insurance advisers who will contact you with options suited to your needs. The advisers we refer you to are licensed under New Zealand's Financial Markets Conduct Act 2013 (FMCA). Cover4You operates as a referral service and is not itself licensed to provide financial advice.
              </p>
              <p className="mt-3">
                We do not charge you any fee for using our comparison and referral service. We may receive referral compensation from insurers or advisers when an enquiry is made through our Site. This does not affect the cost of any insurance product to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. User Obligations</h2>
              <p>By using our Site, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-slate-600">
                <li>Provide accurate, complete, and truthful information when submitting enquiries or quote requests</li>
                <li>Use the Site only for lawful purposes and in a manner that does not infringe the rights of others</li>
                <li>Not attempt to gain unauthorised access to any part of the Site or its systems</li>
                <li>Not use the Site to transmit spam, malware, or any other harmful content</li>
                <li>Not reproduce, duplicate, copy, or re-sell any part of our Site without our express written permission</li>
              </ul>
              <p className="mt-4">
                Providing false information in a quote request may result in removal of your access to our services and could constitute a breach of applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. No Financial Advice</h2>
              <p>
                The information on this Site is general in nature and does not constitute financial advice, insurance advice, or a recommendation to purchase any particular insurance product. We strongly recommend you read the relevant Product Disclosure Statement (PDS) and seek independent advice before making any financial decision.
              </p>
              <p className="mt-3">
                Any content on this Site is provided for informational purposes only. Cover4You accepts no responsibility for decisions made on the basis of information published on this Site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Intellectual Property</h2>
              <p>
                All content on this Site — including text, graphics, logos, icons, images, and software — is the property of Cover4You or its content suppliers and is protected by New Zealand and international copyright laws. You may view and print pages from the Site for your personal, non-commercial use only.
              </p>
              <p className="mt-3">
                You must not modify, copy, distribute, transmit, display, reproduce, publish, license, create derivative works from, transfer, or sell any content obtained from this Site without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Accuracy of Information</h2>
              <p>
                We make reasonable efforts to ensure the information on this Site is accurate and up to date, but we make no warranties — express or implied — as to its accuracy, completeness, or fitness for a particular purpose. Insurance products, pricing, and availability can change, and the information on our Site may not reflect the most current terms offered by any given insurer.
              </p>
              <p className="mt-3">
                We reserve the right to change the content of this Site at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Cover4You and its directors, employees, agents, and affiliates will not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this Site or the services we refer you to — even if we have been advised of the possibility of such damages.
              </p>
              <p className="mt-3">
                This includes, without limitation, any loss of data, loss of profit, loss of business, or any other financial loss.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Third-Party Links</h2>
              <p>
                This Site may contain links to third-party websites, including insurance providers, advisers, and industry bodies. These links are provided for your convenience only. We have no control over those sites and accept no responsibility for their content, accuracy, or privacy practices. Accessing any linked third-party site is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Complaints</h2>
              <p>
                If you have a complaint about our referral service or the way we have handled your personal information, please contact us in the first instance at{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-medium">
                  hello@cover4you.co.nz
                </a>. We will acknowledge your complaint within 5 working days and aim to resolve it within 20 working days.
              </p>
              <p className="mt-3">
                If you are unhappy with the resolution, you may escalate your complaint to an approved dispute resolution scheme. If your complaint relates to an insurance adviser we referred you to, you should also contact them directly — their dispute resolution process will be set out in their disclosure documents.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated date. Continued use of the Site after changes are posted constitutes your acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of New Zealand. Any disputes arising under or in connection with these terms will be subject to the exclusive jurisdiction of the New Zealand courts.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mt-8">
              <h3 className="font-bold text-slate-900 mb-2">Questions About These Terms?</h3>
              <p className="text-slate-600 text-sm">
                Contact us at{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-medium">
                  hello@cover4you.co.nz
                </a>. You can also review our{' '}
                <Link href="/privacy/" className="text-emerald-600 hover:underline">Privacy Policy</Link> and{' '}
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
