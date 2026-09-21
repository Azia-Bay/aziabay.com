import { Tab } from "@/lib/types"

import Button from "@/components/ui/button"

type SidebarButtonsProps = {
  onTabChange: (tab: Tab) => void;
};

class SidebarButton {
  public tab: Tab;
  public src: string;
  public alt: string;
  public text: string;

  constructor(tab: Tab, src: string, alt: string, text: string) {
    this.tab = tab;
    this.src = src;
    this.alt = alt;
    this.text = text;
  }
};

const SIDEBAR_BUTTONS = [
  new SidebarButton(
    "games",
    "sidebar/button_icon_games.gif",
    "A 1-bit (black & white) pixel art icon of an old-school arcade joystick. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
    "Games"
  ),
  new SidebarButton(
    "blog",
    "sidebar/button_icon_blog.gif",
    "A 1-bit (black & white) pixel art icon of a trumpet. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
    "Blog"
  ),
  new SidebarButton(
    "resume",
    "sidebar/button_icon_resume.gif",
    "A 1-bit (black & white) pixel art icon of an anonymous resume. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
    "Resume"
  ),
  new SidebarButton(
    "contact",
    "sidebar/button_icon_contact.gif",
    "A 1-bit (black & white) pixel art icon of an elegantly-sealed letter. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.",
    "Contact"
  )
];

export default function SidebarButtons({ onTabChange }: SidebarButtonsProps) {
  return (
    <nav
      className="w-auto h-auto grid grid-cols-2 gap-1">
      {SIDEBAR_BUTTONS.map((button, index) => {
        return <Button
          key={index}
          onClick={() => onTabChange(button.tab)}
          src={button.src}
          alt={button.alt}
          eager>
          {button.text}
        </Button>
      })}
    </nav>
  );
}
