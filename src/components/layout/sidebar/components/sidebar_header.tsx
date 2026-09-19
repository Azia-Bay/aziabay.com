import { SITE_NAME } from "@/lib/consts";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useTheme } from "@teispace/next-themes";

export default function SidebarHeader() {
  const [mounted, setMounted] = useState(false);
  const [isEyeIconHovered, setIsEyeIconHovered] = useState(false);
  
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-2/3 mt-6 flex flex-col">
      <div className="px-4 flex flex-row">
        <a href="/">
          <button className="group relative overflow-hidden cursor-pointer flex flex-row">
            <Image onMouseEnter={() => setIsEyeIconHovered(true)} onMouseLeave={() => setIsEyeIconHovered(false)} className="w-auto h-auto px-2 py-0.5 rounded-lg rounded-r-none rounded-b-none border-t-4 border-l-4 border-foreground border-double bg-dark pixelated" src={isEyeIconHovered ? "/icon_closed.png" : "/icon.png"} alt="A 1-bit (black & white) pixel art icon of an eye, wide-open. The site logo. The eye closes when hovered over by the mouse pointer." width={0} height={0} unoptimized loading="eager" />

            <div className="relative px-4 py-1 rounded-lg rounded-l-none rounded-b-none border-t-4 border-r-4 border-dark border-double bg-light">
              <span className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out pixelated bg-size-[1px_1px] bg-[repeating-conic-gradient(var(--dark)_0%_25%,var(--light)_25%_50%)]" />

              <div className="relative text-dark text-lg font-bold uppercase">
                {SITE_NAME}
                
                <span className="absolute left-0 bottom-1 w-full h-px bg-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
              </div>
            </div>
          </button>
        </a>
      </div>

      <Image className="cursor-pointer w-full rounded-lg border-4 border-foreground border-double pixelated" src={theme === "dark" ? "sidebar/headshot.gif" : "sidebar/headshot_light.gif"} alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} unoptimized loading="eager" />
    </div>
  );
}
