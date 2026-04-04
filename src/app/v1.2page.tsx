import { LeadForm } from "@/components/LeadForm";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* NAV */}
      <nav className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 52"
          className="h-10 w-auto"
        >
          <rect x="0" y="4" width="8" height="44" rx="2" fill="#2563eb" />
          <rect
            x="12"
            y="14"
            width="8"
            height="34"
            rx="2"
            fill="#3b82f6"
            opacity="0.7"
          />
          <text
            x="32"
            y="42"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="40"
            fontWeight="700"
            fill="#0f172a"
            letterSpacing="0.02em"
          >
            Reordica
          </text>
        </svg>
        <a
          href="mailto:hello@reordica.com"
          className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
        >
          garry@reordica.com
        </a>
      </nav>

      {/* HERO + FORM */}
      <section className="mx-auto max-w-5xl px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: MESSAGE */}
          <div className="max-w-lg">
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
              For Irish distributors &amp; wholesalers
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              Replace the reorder spreadsheet with something smarter.
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Before every purchase order, your procurement team exports data
              into Excel, manually joining stock levels against orders, working out what
              to reorder, deciding which customers get priority when stock is
              tight. Hours of work, no audit trail, and when that buyer leaves,
              the knowledge goes with them.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Reordica replaces that step. Upload the CSVs you already use, and
              it does the heavy lifting by flagging shortfalls, prioritising customer orders, scoring
              confidence, and learning from every decision your team makes.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold">
                    No integration required.
                  </span>{" "}
                  Upload the same CSV exports you already produce.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold">Learns how you buy.</span>{" "}
                  Every override and adjustment is captured, so the system gets
                  smarter each cycle.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold">
                    Preserves institutional knowledge.
                  </span>{" "}
                  Your buying logic stays with the business, not in one
                  person&apos;s head.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:sticky lg:top-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">4–8 hrs</p>
              <p className="mt-1 text-sm text-slate-500">
                per week spent on manual reorder spreadsheets
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">~580</p>
              <p className="mt-1 text-sm text-slate-500">
                Irish distributors in our target segment
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">0%</p>
              <p className="mt-1 text-sm text-slate-500">
                of that knowledge is captured when a buyer leaves
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            How Reordica works
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">01</span>
              </div>
              <h3 className="font-semibold text-slate-900">
                Upload your CSVs
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                The same inventory, orders, and supplier files you already
                export. No new formats, no integration project.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">02</span>
              </div>
              <h3 className="font-semibold text-slate-900">
                Review the reorder table
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                See recommended quantities, shortfalls, and affected customers —
                sorted by risk. Adjust anything before committing.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">03</span>
              </div>
              <h3 className="font-semibold text-slate-900">
                Export and order
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Download a PO-ready CSV with your final quantities. Every
                decision is logged — building your procurement memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Interested?</h2>
          <p className="mt-3 text-slate-600">
            We&apos;re looking for a small number of Irish distributors to pilot
            Reordica. If your team spends hours in Excel before every purchase
            order, we&apos;d like to talk.
          </p>
          <ScrollToTopButton />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 52"
            className="h-8 w-auto"
          >
            <rect x="0" y="4" width="8" height="44" rx="2" fill="#2563eb" />
            <rect
              x="12"
              y="14"
              width="8"
              height="34"
              rx="2"
              fill="#3b82f6"
              opacity="0.7"
            />
            <text
              x="32"
              y="42"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="40"
              fontWeight="700"
              fill="#0f172a"
              letterSpacing="0.02em"
            >
              Reordica
            </text>
          </svg>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a
              href="mailto:hello@reordica.com"
              className="hover:text-slate-600 transition-colors"
            >
              garry@reordica.com
            </a>
            <span>&copy; 2026 Reordica</span>
          </div>
        </div>
      </footer>
    </main>
  );
}