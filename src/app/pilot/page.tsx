import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";

const faqs = [
  {
    q: "How long does a pilot run?",
    a: "Long enough to run several real reorder cycles — typically a couple of months. The point is to see Reordica working on your actual purchasing rhythm, not a one-off demo.",
  },
  {
    q: "Do we need our IT people involved?",
    a: "No. Reordica works from the CSV exports your system already produces. There's no integration project, nothing to install, and nothing changes in your existing setup.",
  },
  {
    q: "What does it cost?",
    a: "Founding pilots run on founding terms, agreed directly with each company. Companies that continue after the pilot lock in a founding-customer rate.",
  },
  {
    q: "What happens to our data?",
    a: "Every pilot runs under a written agreement with data processing terms. Your files are private to your company, used only to run your reviews, never shared with other customers, never used to train publicly available AI models, and deleted on request.",
  },
  {
    q: "Can we stop mid-pilot?",
    a: "Yes, at any time, no reason needed. We'll delete your data on request and part on good terms.",
  },
  {
    q: "Who is this for?",
    a: "Mid-sized Irish distributors and wholesalers where someone pieces together stock, order, and supplier data in Excel before purchase orders go out. If that's your business, you're who we built this for.",
  },
];

export default function PilotPage() {
  return (
    <main className="min-h-screen text-slate-900 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* NAV */}
      <nav className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
        <Link href="/" aria-label="Reordica home">
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
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
          >
            Product
          </Link>
        </div>
      </nav>

      {/* HERO + FORM */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-48 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-70 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* LEFT */}
            <div className="lg:col-span-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-medium text-blue-700">
                  Limited places — applications reviewed individually
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15] tracking-tight text-slate-900">
                Pilot Reordica with your{" "}
                <span className="relative">
                  <span className="relative z-10">real reorder cycles.</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-0 rounded-sm" />
                </span>
              </h1>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed">
                We&apos;re working with a small number of Irish distributors
                and wholesalers to prove Reordica on real purchasing — your
                files, your reorder cycles, your customers. Pilot companies
                get a working tool, direct access to the founder, and a real
                say in what gets built.
              </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We&apos;re deliberately keeping the group small. We&apos;d
                rather do a great job for a few companies than a mediocre job
                for many.
              </p>

              {/* What you get / what we ask */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-slate-100 p-5">
                  <p className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                    What you get
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>The reorder spreadsheet step, replaced</li>
                    <li>
                      Customer coverage visible before every PO — covered, at
                      risk, or short
                    </li>
                    <li>A direct line to the founder, not a ticket queue</li>
                    <li>A real say in what gets built next</li>
                    <li>
                      A locked founding-customer rate if you continue after
                      the pilot
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 p-5">
                  <p className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                    What we ask
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>
                      A named point person — usually whoever owns the reorder
                      spreadsheet today
                    </li>
                    <li>
                      Real exports, uploaded on your normal reorder rhythm
                    </li>
                    <li>A short feedback call each cycle (20–30 minutes)</li>
                    <li>Honesty about what works and what doesn&apos;t</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-2 lg:sticky lg:top-8">
              <LeadForm />
              <p className="mt-3 text-xs text-slate-400 text-center">
                Applying creates no obligation on either side. We reply to
                every application within two working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {/* HOW A PILOT RUNS */}
      <section className="bg-slate-50/70">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase text-center mb-3">
            How a pilot runs
          </p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-14">
            Four steps, no integration project
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Apply",
                text: "Tell us a little about your business and how reordering works today. Two minutes, no commitment.",
              },
              {
                step: "02",
                title: "A short call",
                text: "We talk through your reorder process and decide together whether the pilot is a good fit. If it isn't, we'll say so.",
              },
              {
                step: "03",
                title: "Upload and run",
                text: "You upload the exports you already produce and run your normal reorder cycles through Reordica, with direct support.",
              },
              {
                step: "04",
                title: "Decide",
                text: "After a few cycles, you'll know whether Reordica earns its place. Continue on founding terms, or walk away clean.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 px-6 py-8"
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

          <p className="mt-10 text-center text-sm text-slate-400 max-w-xl mx-auto">
            Every pilot runs under a written agreement with data processing
            terms. Your files stay private to your company, are used only to
            run your reviews, and are deleted on request. Reordica suggests —
            your team decides.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase text-center mb-3">
            Common questions
          </p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            The things your MD will ask
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-slate-600">
              Something else on your mind?{" "}
              <a
                href="mailto:garry@reordica.com"
                className="text-blue-600 hover:underline font-medium"
              >
                Just ask.
              </a>
            </p>
          </div>
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
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">
              Terms
            </Link>
            <a
              href="mailto:garry@reordica.com"
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