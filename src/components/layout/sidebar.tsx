import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-1/5">
      <Image className="w-full h-auto" src="/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} />
    </div>
  );
}
