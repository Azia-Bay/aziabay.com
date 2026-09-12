import { Tab } from "@/lib/types"

import About from "@/components/layout/sidebar/components/sidebar_about"
import Button from "@/components/layout/sidebar/components/sidebar_button"
import Copyright from "@/components/layout/sidebar/components/sidebar_copyright"
import Details from "@/components/layout/sidebar/components/sidebar_details"
import Divider from "@/components/layout/sidebar/components/sidebar_divider"
import Footer from "@/components/layout/sidebar/components/sidebar_footer"
import Header from "@/components/layout/sidebar/components/sidebar_header"
import Socials from "@/components/layout/sidebar/components/sidebar_socials"

type SidebarProps = {
  onTabChange: (tab: Tab) => void;
};

export default function Sidebar({ onTabChange }: SidebarProps) {
  return (
    <div className="w-1/3 h-screen p-4 pb-0 flex flex-col items-center gap-4">
      <Header />
      <Divider />
      <Socials />
      <About />
      <Divider />
      
      <nav className="w-auto h-auto grid grid-cols-2 gap-1">
        <Button onClick={() => onTabChange("games")} src="sidebar/button_icon_games.gif" alt="A 1-bit (black & white) pixel art icon of an old-school arcade joystick. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Games</Button>

        <Button onClick={() => onTabChange("blog")} src="sidebar/button_icon_blog.gif" alt="A 1-bit (black & white) pixel art icon of a trumpet. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Blog</Button>

        <Button onClick={() => onTabChange("resume")} src="sidebar/button_icon_resume.gif" alt="A 1-bit (black & white) pixel art icon of an anonymous resume. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Resume</Button>

        <Button onClick={() => onTabChange("contact")} src="sidebar/button_icon_contact.gif" alt="A 1-bit (black & white) pixel art icon of an elegantly-sealed letter. It animatedly bounces up and down, with a shadow underneath adding three-dimensionality.">Contact</Button>
      </nav>

      <Divider />
      <Copyright />
      <Details onTabChange={onTabChange} />
      <Footer />
    </div>
  );
}
