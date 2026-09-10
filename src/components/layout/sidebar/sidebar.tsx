import Image from "next/image";

import {
  LINK_TO_GITHUB,
  LINK_TO_LINKEDIN,
  LINK_TO_ITCHIO,
  LINK_TO_SITE_SOURCE
} from "@/lib/consts";

import Button from "@/components/layout/sidebar/components/sidebar_button"
import Copyright from "@/components/layout/sidebar/components/sidebar_copyright"
import Divider from "@/components/layout/sidebar/components/sidebar_divider"
import TextButton from "@/components/layout/sidebar/components/sidebar_text_button"

export default function Sidebar() {
  return (
    <div className="w-1/3 h-screen p-4 pb-0 flex flex-col items-center">
      <Image className="w-full h-auto pixelated" src="sidebar/banner_arms.png" alt="" width={0} height={0} unoptimized loading="eager" />

      <Divider />
      
      <Image className="cursor-pointer w-2/3 h-auto pixelated" src="sidebar/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} unoptimized loading="eager" />

      <Divider />

      <div className="w-auto h-auto flex flex-row gap-1">
        <a href={LINK_TO_LINKEDIN} target="_blank">
          <Button src="sidebar/button_icon_linkedin.png" alt="A 1-bit (black & white) pixel art icon of the LinkedIn logo, with a shadow underneath adding three-dimensionality." />
        </a>
        <a href={LINK_TO_GITHUB} target="_blank">
          <Button />
        </a>
        <a href={LINK_TO_ITCHIO} target="_blank">
          <Button />
        </a>
      </div>

      <Divider />
      
      <div className="w-auto h-auto grid grid-cols-2 gap-1">
        <Button src="sidebar/button_icon_games.gif" alt="A 1-bit (black & white) pixel art icon of an old-school arcade joystick. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Games</Button>
        <Button src="sidebar/button_icon_blog.gif" alt="A 1-bit (black & white) pixel art icon of a trumpet. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Blog</Button>
        <Button src="sidebar/button_icon_resume.gif" alt="A 1-bit (black & white) pixel art icon of an anonymous resume. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Resume</Button>
        <Button src="sidebar/button_icon_contact.gif" alt="A 1-bit (black & white) pixel art icon of an elegantly-sealed letter. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Contact</Button>
      </div>

      <Divider />

      <Copyright />

      <div className="mt-auto flex flex-row gap-1">
        <TextButton>How did I make this site?</TextButton>
        <div>
          (
          <a href={LINK_TO_SITE_SOURCE} target="_blank">
            <TextButton>source</TextButton>
          </a>
          )
        </div>
      </div>

      <Image className="w-full h-auto mt-3 pixelated" src="sidebar/banner_pillars.png" alt="" width={0} height={0} unoptimized loading="eager" />
    </div>
  );
}
