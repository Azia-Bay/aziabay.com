import type { Metadata } from "next";

import { Philosopher } from "next/font/google";

import { SITE_NAME } from "@/lib/consts";

import "./globals.css";

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: ""
};

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={philosopher.className}>
      <body>{children}</body>
    </html>
  );
}
