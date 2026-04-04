"use client";

export function ScrollToFormButton() {
  return (
    <button
      onClick={() =>
        document
          .getElementById("get-started")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
    >
      Get Early Access
      <svg
        className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  );
}
