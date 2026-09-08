import Image from "next/image";

import Button from "@/components/ui/button"
import Divider from "@/components/ui/divider"
import TextButton from "@/components/ui/text_button"

export default function Sidebar() {
  return (
    <div className="w-1/3 h-screen p-4 pb-0 flex flex-col items-center">
      <Image className="w-full h-auto pixelated" src="/banner_arms.png" alt="" width={0} height={0} unoptimized />

      <Divider />
      
      <Image className="cursor-pointer w-2/3 h-auto pixelated" src="/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} />

      <Divider />
      <Divider />
      
      <div className="w-auto h-auto flex flex-col gap-0.5 items-center">
        <Button src="/button_icon_games.png" alt="placeholder">Games</Button>
        <Button>Blog</Button>
        <Button>Resume</Button>
        <Button src="/button_icon_contact.gif" alt="placeholder">Contact</Button>
      </div>

      <Divider />

      <TextButton className="mt-auto">
        How did I make this site?
      </TextButton>

      <Image className="w-full h-auto mt-3 pixelated" src="/banner_pillars.png" alt="" width={0} height={0} unoptimized />
    </div>
  );
}
