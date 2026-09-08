import type { Metadata } from "next";

import "./globals.css";

const NAME = "AZIABAY"

export const metadata: Metadata = {
  title: { default: NAME, template: `%s | ${NAME}` },
  description: ""
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
