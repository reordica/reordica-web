import { LeadForm } from "@/components/LeadForm";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 bg-gradient-to-b from-slate-50 via-white to-slate-50">
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
          href="/product"
          className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
        >
          Product
        </a>
      </nav>

      {/* HERO + FORM */}
      <section className="relative overflow-hidden">
        {/* Subtle background — large soft blue glow top-right */}
        <div className="absolute -top-32 -right-48 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-70 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-[300px] h-[300px] rounded-full bg-slate-50 opacity-80 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* LEFT: MESSAGE — 3 cols */}
            <div className="lg:col-span-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-medium text-blue-700">
                  Now accepting pilot applications
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15] tracking-tight text-slate-900">
                Replace the reorder{" "}
                <span className="relative">
                  <span className="relative z-10">spreadsheet.</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-0 rounded-sm" />
                </span>{" "}
                See who gets shorted before the PO goes out.
              </h1>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed italic">
                &ldquo;When stock runs tight at a distributor, it&apos;s usually
                the wrong customers who lose out.&rdquo;
              </p>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                If you&apos;re a distributor or wholesaler using Excel to decide
                what to reorder, Reordica replaces that step. Upload your
                files, see which customers are covered, at risk, or short —
                and work through the list with Co-buyer, an AI assistant with
                full context on every SKU.
              </p>

              <p className="mt-6 text-lg text-slate-600 font-medium">
                This probably looks familiar:
              </p>
              <ul className="mt-2 space-y-1.5 text-lg text-slate-600 font-medium list-disc list-inside">
                <li>Exporting stock, orders, and supplier data into Excel</li>
                <li>Reconciling it by hand before every purchase order</li>
                <li>
                  Finding out which customers got shorted only when the phone
                  rings
                </li>
              </ul>

              <div className="mt-10 space-y-4">
                {[
                  {
                    title: "Covered, at risk, or short — before the PO",
                    text: "See exactly which customers are affected by each shortfall, with priority and due date already applied.",
                  },
                  {
                    title: "Co-buyer does the wrangling",
                    text: "Upload the CSV exports you already use. Co-buyer matches the data, flags the risks, and answers questions on every SKU.",
                  },
                  {
                    title: "Your buying knowledge stays with the business",
                    text: "Every override and the reasoning behind it gets remembered — so recommendations get sharper, and the context stays when buyers move on.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-white"
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
                    <div>
                      <p className="text-slate-900 font-semibold text-[15px]">
                        {item.title}
                      </p>
                      <p className="text-slate-500 text-sm mt-0.5">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: FORM — 2 cols */}
            <div className="lg:col-span-2 lg:sticky lg:top-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER — thin blue accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {/* STATS */}
      <section className="bg-slate-50/70">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                value: "4–8 hrs",
                label:
                  "spent every week wrangling supplier, stock, and order data before a PO",
              },
              {
                value: "No tool",
                label:
                  "shows which customers are at risk when stock runs tight",
              },
              {
                value: "1 buyer",
                label:
                  "usually holds the priority judgement — until they change role",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 px-6 py-6 text-center"
              >
                <p className="text-3xl font-bold text-slate-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-500 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase text-center mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-14">
            Upload. Review. Reorder.
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload your CSVs",
                text: "The same inventory, orders, and supplier files you already export. Co-buyer maps the columns on first upload and remembers them next time.",
              },
              {
                step: "02",
                title: "Work through the Reorder Review",
                text: "See recommended quantities, shortfalls, and which customers are covered, at risk, or short — before the PO goes out. Ask Co-buyer anything about any SKU.",
              },
              {
                step: "03",
                title: "Export the PO",
                text: "Download a PO-ready CSV with your final quantities. Every override and its reasoning gets remembered — so next week&apos;s review is sharper.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-slate-50 rounded-xl border border-slate-100 px-6 py-8"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / SOCIAL PROOF PLACEHOLDER */}
      <section className="bg-slate-50/70">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed italic">
            &ldquo;His current company is grappling with problems of visibility
            between customer order priority and inventory. They&apos;re working
            off spreadsheets even though they&apos;re a multi-million euro
            business.&rdquo;
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Industry advisor — 30 years in Irish supply chain
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Interested?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            We&apos;re working with a small number of Irish distributors to
            pilot Reordica. If your team wrangles spreadsheets before every
            purchase order — and the wrong customers occasionally get shorted
            — we&apos;d like to talk.
          </p>
          <ScrollToTopButton />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 52"
            className="h-7 w-auto opacity-60"
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
              hello@reordica.com
            </a>
            <span>&copy; 2026 Reordica</span>
          </div>
        </div>
      </footer>
    </main>
  );
}