import { Tab } from "@/lib/types"

import About from "@/components/layout/sidebar/components/sidebar_about"
import Buttons from "@/components/layout/sidebar/components/sidebar_buttons"
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
      <Buttons onTabChange={onTabChange} />
      <Divider />
      <Copyright />
      <Details onTabChange={onTabChange} />
      <Footer />
    </div>
  );
}
