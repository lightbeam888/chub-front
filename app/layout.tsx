import type { Metadata } from "next";
import "./assets/scss/style.scss";

import Left from "./components/dashboard/Left";
import Top from "./components/dashboard/Top";

// import localFont from "next/font/local";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Chub Trading",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-wrap layout h-screen">
          <Left className="layout-left w-[var(--left-width)] flex-[0_0_auto]" />
          <div className="layout-right w-full lg:w-[calc(100%-var(--left-width))] flex-[0_0_auto]">
            <Top />
            <div className="layout-main h-[calc(100vh-var(--top-height))] overflow-auto p-4 md:p-6 lg:py-6 xl:px-8 2xl:px-10">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
