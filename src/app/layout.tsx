import type { Metadata } from "next";

import { NAME } from "@/lib/consts";

import "./globals.css";

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
