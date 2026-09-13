import { Tab } from "@/lib/types"

import Button from "@/components/ui/button"

type SidebarButtonsProps = {
  onTabChange: (tab: Tab) => void;
};

export default function SidebarButtons({ onTabChange }: SidebarButtonsProps) {
  return (
    <nav className="w-auto h-auto grid grid-cols-2 gap-1">
      <Button onClick={() => onTabChange("games")} src="sidebar/button_icon_games.gif" alt="A 1-bit (black & white) pixel art icon of an old-school arcade joystick. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Games</Button>

      <Button onClick={() => onTabChange("blog")} src="sidebar/button_icon_blog.gif" alt="A 1-bit (black & white) pixel art icon of a trumpet. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Blog</Button>

      <Button onClick={() => onTabChange("resume")} src="sidebar/button_icon_resume.gif" alt="A 1-bit (black & white) pixel art icon of an anonymous resume. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Resume</Button>

      <Button onClick={() => onTabChange("contact")} src="sidebar/button_icon_contact.gif" alt="A 1-bit (black & white) pixel art icon of an elegantly-sealed letter. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Contact</Button>
    </nav>
  );
}
