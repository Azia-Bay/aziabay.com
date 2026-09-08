import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-1/3 h-screen p-4 pb-0 flex flex-col items-center">
      <Image className="w-full h-auto pixelated" src="/banner_arms.png" alt="" width={0} height={0} unoptimized />
      <Image className="cursor-pointer w-2/3 h-auto pixelated" src="/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} />
      <Image className="w-full h-auto mt-auto pixelated" src="/banner_pillars.png" alt="" width={0} height={0} unoptimized />
    </div>
  );
}
