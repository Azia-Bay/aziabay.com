"use client";

import { ThemeProvider } from "@teispace/next-themes";

import { ModalProvider } from "@/lib/modal_context";

type ProvidersProps = {
  children?: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
}
