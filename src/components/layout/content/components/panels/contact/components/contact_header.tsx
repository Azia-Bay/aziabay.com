import Image from "next/image";

export default function ContactHeader() {
  return (
    <Image className="w-full h-auto max-w-125 m-4 pixelated" src="content/panels/contact/banner_arms.png" alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's." width={0} height={0} unoptimized />
  );
}
