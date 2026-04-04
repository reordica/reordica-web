import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reordica — Replace the reorder spreadsheet",
  description:
    "Reordica replaces the Excel step before every purchase order. Built for Irish distributors and wholesalers.",
  openGraph: {
    title: "Reordica — Replace the reorder spreadsheet",
    description:
      "Reordica replaces the Excel step before every purchase order. Built for Irish distributors and wholesalers.",
    url: "https://reordica.com",
    siteName: "Reordica",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reordica — Replace the reorder spreadsheet",
    description:
      "Reordica replaces the Excel step before every purchase order. Built for Irish distributors and wholesalers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}