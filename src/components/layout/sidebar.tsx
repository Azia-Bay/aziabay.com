import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-1/4">
      <Image className="cursor-pointer w-full h-auto pixelated" src="/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} />
    </div>
  );
}
