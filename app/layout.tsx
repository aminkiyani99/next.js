import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";


export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next js 14 training course",
};

const vazirFont = localFont({
  src:"../public/Font/Vazirmatn-Regular.woff2"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${vazirFont.className}`}><main className="p-5">{children}</main></body>
    </html>
  );
}
