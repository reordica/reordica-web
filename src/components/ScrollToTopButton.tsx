"use client";

export function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-block mt-6 px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
    >
      Request early access
    </button>
  );
}
