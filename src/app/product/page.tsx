import Link from "next/link";
import { PainPoint } from "@/components/PainPoint";
import { Step } from "@/components/Step";
import { FeatureCard } from "@/components/FeatureCard";
import { AudienceCard } from "@/components/AudienceCard";
import { LeadForm } from "@/components/LeadForm";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";

export default function LandingPage() {
  return (
<main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden">
  {/* NAVIGATION */}
  <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
    <div className="flex items-center gap-2">
      
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" width="360" height="80">
 
  

  <rect x="0" y="8" width="8" height="44" rx="2" fill="#2563eb"/>
  <rect x="12" y="18" width="8" height="34" rx="2" fill="#3b82f6" opacity="0.7"/>
  
 
  <text x="32" y="46" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#0f172a" letter-spacing="0.02em">Reordica</text>
  
 
  <text x="32" y="68" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="400" fill="#64748b" letter-spacing="0.16em">PROCUREMENT INTELLIGENCE</text>
</svg>
    </div>
    <div className="flex items-center gap-6">
      <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
        Home
      </Link>
      <Link href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
        How it works
      </Link>
      <Link href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
        Features
      </Link>
    </div>
  </nav>

  {/* HERO */}
  <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-32">
    {/* Background decoration */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />
    <div className="absolute top-40 right-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 -z-10" />

    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-sm font-medium text-blue-700">Now in early access</span>
      </div>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
        Replace the reorder spreadsheet
        <br />
        <span className="text-blue-600">
          with something smarter.
        </span>
      </h1>

      <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Reordica replaces the Excel chaos that happens before every purchase order — joining stock levels, sales demand, and supplier data so your team can reorder with confidence.
      </p>

      <p className="mt-4 text-sm text-slate-500">
        Upload the CSVs you already use. No system integration required. Reordica learns how you buy and gets smarter every cycle.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        
        <ScrollToFormButton />
        
      </div>
    </div>

    {/* Dashboard Preview */}
    <div className="mt-20 text-center">
      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Dashboard Preview</span>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">See your reorder review at a glance</h2>
    </div>
    <div className="mt-8 relative px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 pointer-events-none" />
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden">
        <a href="/reordica_dashboard.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/reordica_dashboard.png"
            alt="Reordica reorder review dashboard"
            className="w-full h-auto"
          />
        </a>
      </div>
    </div>
  </section>

  {/* PROBLEM */}
  <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="max-w-3xl">
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">The Problem</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
          Your ERP has the data. Your team still{" "}
          <span className="text-blue-400">
            reorders from a spreadsheet
          </span>
          .
        </h2>
        <p className="mt-6 text-xl text-slate-300 leading-relaxed">
          Before every purchase order, procurement teams export data from multiple systems and piece it together in Excel. Stock levels, sales demand, supplier lead times, customer priorities — all wrangled in a spreadsheet that has no memory and no audit trail. When the buyer who built that spreadsheet leaves, the knowledge leaves with them.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <PainPoint icon="📊" text="Stock, orders, and supplier data joined manually in Excel every reorder cycle" />
        <PainPoint icon="🧠" text="Buyer knowledge lives in one person's head — and leaves when they do" />
        <PainPoint icon="⏱️" text="4–8 hours per week spent on a process no system captures" />
      </div>
    </div>
  </section>

  {/* SOLUTION */}
  <section className="py-24 bg-gradient-to-b from-white to-slate-50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">The Solution</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
          The decision layer between{" "}
          <span className="text-blue-600">
            your data and your purchase order
          </span>
        </h2>
        <p className="mt-6 text-xl text-slate-600">
          Reordica sits where the spreadsheet used to. Upload your existing CSV exports, and it joins inventory against orders, flags shortfalls, scores confidence, and presents an editable reorder review — ready for your team to approve.
        </p>
        <p className="mt-3 text-sm text-slate-500">Not a dashboard. Not an ERP replacement. The intelligent step between exporting your data and raising the PO.</p>
      </div>
    </div>
  </section>

  {/* HOW IT WORKS */}
  <section id="how-it-works" className="py-24 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">Upload. Review. Reorder.</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Step
          number="01"
          title="Upload your CSVs"
          description="Drop in the same inventory, orders, and supplier files you already export. Reordica maps the columns and joins the data automatically."
          icon={
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          }
          gradient="from-blue-500 to-cyan-500"
        />
        <Step
          number="02"
          title="Review the reorder table"
          description="See recommended quantities, shortfalls, confidence scores, and affected customers — sorted by risk. Adjust anything before committing."
          icon={
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          }
          gradient="from-blue-500 to-blue-500"
        />
        <Step
          number="03"
          title="Export and order"
          description="Download a purchase-order-ready CSV with your final quantities, ready to import into your existing systems. Every decision is logged."
          icon={
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          gradient="from-blue-500 to-blue-500"
        />
      </div>
    </div>
  </section>

  {/* FEATURES */}
  <section id="features" className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Features</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">Smarter than the spreadsheet</h2>
        <p className="mt-4 text-xl text-slate-600">Built to replace the Excel step — without replacing your systems</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon="🔄"
          title="Automatic Data Matching"
          description="Upload CSVs from any system. Reordica maps columns, joins inventory against orders, and calculates shortfalls automatically."
        />
        <FeatureCard
          icon="🚩"
          title="Risk-Sorted Reorder Review"
          description="See what's short, which customers are affected, and where confidence is low — sorted by what matters most."
        />
        <FeatureCard
          icon="🧠"
          title="Decision Learning"
          description="When you adjust a recommendation, Reordica captures why. Over time, it learns your priorities, supplier preferences, and risk tolerance."
        />
        <FeatureCard
          icon="📋"
          title="Audit Trail"
          description="Every override, adjustment, and approval is logged with context. Know why decisions were made — even after staff change."
        />
        <FeatureCard
          icon="📤"
          title="PO-Ready Export"
          description="Download a clean CSV with your final quantities, ready to import into your ERP or send to suppliers."
        />
        <FeatureCard
          icon="🔒"
          title="Your Data Stays Yours"
          description="Built for European data sovereignty. Commercially sensitive procurement data transitions to on-premises processing as the system matures."
        />
      </div>
    </div>
  </section>

  {/* WHO IT'S FOR */}
  <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="text-center mb-16">
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Who It&apos;s For</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">Built for distributors and wholesalers</h2>
        <p className="mt-4 text-lg text-blue-100/80 max-w-3xl mx-auto">
          For procurement teams who piece together data in Excel before every purchase order — and know there has to be a better way.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        <AudienceCard
          icon="📦"
          title="Procurement Managers"
          description="The people who spend hours every week wrangling spreadsheets before raising a PO. Reordica gives that time back."
        />
        <AudienceCard
          icon="👥"
          title="Business Owners & MDs"
          description="When your senior buyer leaves, their institutional knowledge leaves too. Reordica captures it before that happens."
        />
        <AudienceCard
          icon="📑"
          title="Mid-Sized Distributors"
          description="Too complex for basic tools, too lean for enterprise platforms. Reordica fits the gap — no integration project required."
        />
      </div>
    </div>
  </section>

  {/* CTA */}
  <section id="get-started" className="py-32 bg-white relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-60" />

    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        Stop reordering from Excel.
        <br />
        <span className="text-blue-600">
          Start deciding with confidence.
        </span>
      </h2>
      {/* Lead gen form */}
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Get started with Reordica
        </h2>
        <LeadForm />
      </div>
    </section>
    </div>
  </section>

 

  {/* FOOTER */}
  <footer className="bg-slate-900 text-slate-400 py-12">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" width="360" height="80">
 
  
 
  <rect x="0" y="8" width="8" height="44" rx="2" fill="#60a5fa"/>
  <rect x="12" y="18" width="8" height="34" rx="2" fill="#93c5fd" opacity="0.6"/>
  

  <text x="32" y="46" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#f0f0f0" letter-spacing="0.02em">Reordica</text>
  
  
  <text x="32" y="68" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="400" fill="rgba(255,255,255,0.65)" letter-spacing="0.16em">PROCUREMENT INTELLIGENCE</text>
</svg>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="mailto:hello@reordica.com" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <p className="text-sm">&copy; 2026 Reordica. All rights reserved.</p>
      </div>
    </div>
  </footer>
</main>
  );
}