import Image from "next/image";

import { Tab } from "@/lib/types"

import {
  LINK_TO_GITHUB,
  LINK_TO_LINKEDIN,
  LINK_TO_ITCHIO,
  LINK_TO_SITE_SOURCE
} from "@/lib/consts";

import About from "@/components/layout/sidebar/components/sidebar_about"
import Button from "@/components/layout/sidebar/components/sidebar_button"
import Copyright from "@/components/layout/sidebar/components/sidebar_copyright"
import Divider from "@/components/layout/sidebar/components/sidebar_divider"
import TextButton from "@/components/layout/sidebar/components/sidebar_text_button"

type SidebarProps = {
  onTabChange: (tab: Tab) => void;
};

export default function Sidebar({ onTabChange }: SidebarProps) {
  const BUTTONS: { id: Tab; src: string; alt: string; label: string }[] = [
    {
      id: "games",
      src: "sidebar/button_icon_games.gif",
      alt: "A 1-bit (black & white) pixel art icon of an old-school arcade joystick. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
      label: "Games"
    },
    {
      id: "blog",
      src: "sidebar/button_icon_blog.gif",
      alt: "A 1-bit (black & white) pixel art icon of a trumpet. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
      label: "Blog"
    },
    {
      id: "resume",
      src: "sidebar/button_icon_resume.gif",
      alt: "A 1-bit (black & white) pixel art icon of an anonymous resume. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
      label: "Resume"
    },
    {
      id: "contact",
      src: "sidebar/button_icon_contact.gif",
      alt: "A 1-bit (black & white) pixel art icon of an elegantly-sealed letter. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
      label: "Contact"
    },
  ];

  return (
    <div className="w-1/3 h-screen p-4 pb-0 flex flex-col items-center gap-4">
      <Image className="w-full h-auto pixelated" src="sidebar/banner_arms.png" alt="" width={0} height={0} unoptimized loading="eager" />
      
      <Image className="cursor-pointer w-2/3 h-auto pixelated" src="sidebar/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} unoptimized loading="eager" />

      <Divider />

      <div className="w-auto h-auto flex flex-row gap-1">
        <Button href={LINK_TO_LINKEDIN} target="_blank" src="sidebar/button_icon_linkedin.png" alt="A 1-bit (black & white) pixel art icon of the LinkedIn logo, with a shadow underneath adding three-dimensionality." />

        <Button href={LINK_TO_GITHUB} target="_blank" src="sidebar/button_icon_github.png" alt="A 1-bit (black & white) pixel art icon of the GitHub logo, with a shadow underneath adding three-dimensionality." />

        <Button href={LINK_TO_ITCHIO} target="_blank" src="sidebar/button_icon_itchio.png" alt="A 1-bit (black & white) pixel art icon of the itch.io logo, with a shadow underneath adding three-dimensionality." />
      </div>

      <About />

      <Divider />
      
      <nav className="w-auto h-auto grid grid-cols-2 gap-1">
        {BUTTONS.map((button) => (
          <Button key={button.id} onClick={() => onTabChange(button.id)} src={button.src} alt={button.alt}>
            {button.label}
          </Button>
        ))}
      </nav>

      <Divider />

      <Copyright />

      <div className="mt-auto flex flex-row gap-1">
        <TextButton>How did I make this site?</TextButton>
        //
        <TextButton href={LINK_TO_SITE_SOURCE} target="_blank">source code</TextButton>
      </div>

      <Image className="w-full h-auto pixelated" src="sidebar/banner_pillars.png" alt="" width={0} height={0} unoptimized loading="eager" />
    </div>
  );
}
