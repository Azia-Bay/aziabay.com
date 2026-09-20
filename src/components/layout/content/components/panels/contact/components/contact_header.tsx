import { useEffect, useState } from "react";

import Image from "next/image";

import { useTheme } from "@teispace/next-themes";

export default function ContactHeader() {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-fit m-4">
      <Image className="w-full h-auto max-w-125 pixelated" src={theme === "dark" ? "content/panels/contact/banner_arms.png" : "content/panels/contact/banner_arms_light.png"} alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's." width={0} height={0} unoptimized />
    </div>
  );
}
