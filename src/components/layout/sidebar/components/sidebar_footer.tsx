import Image from "next/image";

export default function SidebarFooter() {
  return (
    <Image className="w-full h-auto pixelated" src="sidebar/banner_pillars.png" alt="A 1-bit (black & white) pixel art banner of four pillars resembling ionic columns from traditional Greek architecture. The pillars are ornately detailed with juts and grooves and spiral ornaments, appear to infinitely extend below the bounds of the site, and give the impression of reinforcing the site from the earth underneath." width={0} height={0} unoptimized loading="eager" />
  );
}
