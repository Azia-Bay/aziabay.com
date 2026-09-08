import Image from "next/image";

import Button from "@/components/ui/button"
import Divider from "@/components/ui/divider"

export default function Sidebar() {
  return (
    <div className="w-1/3 h-screen p-4 pb-0 flex flex-col items-center">
      <Image className="w-full h-auto pixelated" src="/banner_arms.png" alt="" width={0} height={0} unoptimized />

      <Divider />
      
      <Image className="cursor-pointer w-2/3 h-auto pixelated" src="/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} />

      <Divider />
      <Divider />
      
      <div className="w-32 h-auto flex flex-col gap-0.5 items-center">
        <Button>Games</Button>
        <Button>Blog</Button>
        <Button>Resume</Button>
        <Button>Contact</Button>
      </div>

      <Divider />

      <div className="w-full h-auto mt-auto flex flex-col items-center">
        <button>How did I make this site?</button>
      </div>

      <Image className="w-full h-auto mt-4 pixelated" src="/banner_pillars.png" alt="" width={0} height={0} unoptimized />
    </div>
  );
}
