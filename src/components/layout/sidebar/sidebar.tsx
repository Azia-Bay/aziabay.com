import Image from "next/image";

import Button from "@/components/layout/sidebar/components/sidebar_button"
import Copyright from "@/components/layout/sidebar/components/sidebar_copyright"
import Divider from "@/components/layout/sidebar/components/sidebar_divider"
import TextButton from "@/components/layout/sidebar/components/sidebar_text_button"

export default function Sidebar() {
  return (
    <div className="w-1/3 h-screen p-4 pb-0 flex flex-col items-center">
      <Image className="w-full h-auto pixelated" src="/banner_arms.png" alt="" width={0} height={0} unoptimized loading="eager" />

      <Divider />
      
      <Image className="cursor-pointer w-2/3 h-auto pixelated" src="/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} unoptimized loading="eager" />

      <Divider />
      <Divider />
      
      <div className="w-auto h-auto grid grid-cols-2 gap-1">
        <Button src="/button_icon_games.gif" alt="placeholder">Games</Button>
        <Button src="/button_icon_blog.gif" alt="placeholder">Blog</Button>
        <Button src="/button_icon_resume.gif" alt="placeholder">Resume</Button>
        <Button src="/button_icon_contact.gif" alt="placeholder">Contact</Button>
      </div>

      <Divider />

      <Copyright />

      <div className="mt-auto">
        <TextButton>
          How did I make this site?
        </TextButton>
      </div>

      <Image className="w-full h-auto mt-3 pixelated" src="/banner_pillars.png" alt="" width={0} height={0} unoptimized loading="eager" />
    </div>
  );
}
