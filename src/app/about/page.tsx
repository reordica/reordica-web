import Link from "next/link";

export default function AboutPage() {
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
            href="/pilot"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
          >
            Pilot
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-48 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-70 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15] tracking-tight text-slate-900">
            Built by someone who&apos;s done the{" "}
            <span className="relative">
              <span className="relative z-10">reorder maths</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-0 rounded-sm" />
            </span>{" "}
            by hand.
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            Reordica exists because of a pattern that shouldn&apos;t exist:
            businesses running serious operations on serious systems, whose
            most important purchasing decisions still happen in a spreadsheet
            that one person understands.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-4 pb-16">
          <div className="grid sm:grid-cols-3 gap-10 items-start">
            {/* Photo */}
            <div className="sm:col-span-1">
              <img
                src="/garry-profile.jpg"
                alt="Garry Ledwith, founder of Reordica"
                className="aspect-square w-full rounded-2xl border border-slate-200 object-cover"
              />
              <p className="mt-4 text-sm font-semibold text-slate-900">
                Garry Ledwith
              </p>
              <p className="text-sm text-slate-500">Founder, Reordica</p>
            </div>

            {/* Bio */}
            <div className="sm:col-span-2 space-y-5 text-[16px] leading-relaxed text-slate-600">
              <p>
                Before Reordica, I coordinated production and supply across
                five international facilities for a motorsport apparel
                company. That meant living inside the exact problem Reordica
                solves: data scattered across systems and suppliers, stitched
                together by hand before every purchasing decision, with the
                real knowledge — which customer can&apos;t be shorted, which
                supplier slips in August — living in people&apos;s heads
                rather than in any system.
              </p>
              <p>
                When I started talking to Irish distributors, I found the same
                pattern everywhere, including at multi-million euro
                businesses: the ERP holds the data, and the reordering still
                happens in Excel. Not because the people are behind the times
                — because no tool actually does the step between exporting
                the data and raising the PO. So I&apos;m building that tool.
              </p>
              <p>
                Reordica is developed in the northwest of Ireland through
                Enterprise Ireland&apos;s New Frontiers programme at ATU
                Sligo, and built in close collaboration with an industry
                advisor with thirty years in Irish distribution. Every design
                decision gets tested against one question: would a working
                buyer, on a busy morning, actually trust this?
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {/* PRINCIPLES */}
      <section className="bg-slate-50/70">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase text-center mb-3">
            How we build
          </p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Three rules the product never breaks
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-14">
            Purchasing runs on trust. These aren&apos;t marketing lines —
            they&apos;re constraints the software is built around.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Suggest, never decide",
                text: "Reordica recommends; your team approves. Nothing is ordered, changed, or committed without a person saying so. The judgement stays where it belongs — with your buyers.",
              },
              {
                title: "Show problems, never hide them",
                text: "If something in your data doesn't add up, you see it. Reordica never silently papers over a discrepancy to make a report look clean — a wrong number you trust is worse than a gap you can see.",
              },
              {
                title: "Your data is yours",
                text: "Files are private to your company, used only to run your reviews, never shared, never used to train publicly available AI models, and deleted on request. Full stop.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 px-6 py-8"
              >
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

      {/* WHY IRELAND */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Why Irish distributors first
          </h2>
          <p className="mt-4 text-[16px] text-slate-600 leading-relaxed">
            Irish wholesale is a tight-knit sector where reputation travels
            faster than advertising. That suits how we want to work: a small
            number of pilot companies, done properly, with the product judged
            on whether it earns a place in a real reorder routine. If Reordica
            is going to be trusted with purchasing, it should be able to earn
            that trust the slow way.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50/70">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Sound like your business?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            If your team pieces together spreadsheets before every purchase
            order, we&apos;d like to talk.
          </p>
          <div className="mt-8">
            <Link
              href="/pilot"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              See how the pilot works
            </Link>
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