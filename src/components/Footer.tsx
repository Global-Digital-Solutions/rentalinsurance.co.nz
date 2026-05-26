import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 mt-12 sm:mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* About Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Helping renters and tenants find the right contents insurance — no fees, no fuss.
            </p>
            <p className="text-xs text-slate-500">
              Powered by{' '}
              <a
                href="https://www.cover4you.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
              >
                Cover4You
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/coverage/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="/compare/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Compare Insurers
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Guides &amp; Resources
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/claims/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Making a Claim
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-bold text-white mb-4">Who We Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sectors/tenants/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Tenants
                </Link>
              </li>
              <li>
                <Link href="/sectors/students/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/sectors/flatmates/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Flatmates
                </Link>
              </li>
              <li>
                <Link href="/sectors/families/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Families
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@cover4you.co.nz" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  hello@cover4you.co.nz
                </a>
              </li>

            </ul>
            <div className="mt-4 space-y-2 text-xs text-slate-500">
              <p>FSP Compliant</p>
              <p>No Fees to Compare</p>
              <p>Expert Support</p>
              <p>100% Secure</p>
            </div>
          </div>
        </div>

        {/* Disclaimer — full width */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">How This Site Works</h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            RentalInsurance.co.nz is operated by Cover4You, a referral service that connects renters and tenants with licensed insurance advisers and brokers. We are not an insurance provider, underwriter, or licensed financial adviser. The advisers we refer you to are licensed under the Financial Markets Conduct Act 2013 (FMCA) and bound by their own professional obligations. Cover4You itself is not regulated under the FMCA.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            We may receive referral compensation from insurers or advisers when an enquiry is made through our site. This does not affect the cost of any product to you. Our editorial content is prepared independently and is not influenced by commercial relationships.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            The information on this site is general in nature and does not constitute financial or insurance advice. We recommend you read the relevant Product Disclosure Statement (PDS) and consider your own circumstances before purchasing any insurance product. All efforts are made to keep information current and accurate, but we do not guarantee completeness or suitability for your individual needs.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 mt-8">
          <div className="text-center text-xs text-slate-500">
            <p>
              Copyright {currentYear} Rental Insurance. All rights reserved. |{' '}
              <a
                href="https://www.icnz.org.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors underline"
              >
                Insurance Council of New Zealand
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
