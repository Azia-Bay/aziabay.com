import { useEffect, useState } from "react";

import Image from "next/image";

import { useTheme } from "@teispace/next-themes";

export default function SidebarFooter() {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Image className="w-full h-auto pixelated" src={theme === "dark" ? "sidebar/banner_pillars.png" : "sidebar/banner_pillars_light.png"} alt="A 1-bit (black & white) pixel art banner of four pillars resembling ionic columns from traditional Greek architecture. The pillars are ornately detailed with juts and grooves and spiral ornaments, appear to infinitely extend below the bounds of the site, and give the impression of reinforcing the site from the earth underneath." width={0} height={0} unoptimized loading="eager" />
  );
}
