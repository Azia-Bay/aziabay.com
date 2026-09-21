import type { Metadata } from "next";

import { Philosopher } from "next/font/google";

import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/consts";

import Providers from "@/lib/providers"
import FogReveal from "@/components/vfx/fog_reveal";

import "./globals.css";

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION
};

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={philosopher.className}
      suppressHydrationWarning>
      <body
        className="cursor">
        <Providers>
          <FogReveal>
            {children}
          </FogReveal>
        </Providers>
      </body>
    </html>
  );
}
