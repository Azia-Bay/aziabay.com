import { Tab } from "@/lib/types";

import About from "./components/sidebar_about";
import Buttons from "./components/sidebar_buttons";
import Copyright from "./components/sidebar_copyright";
import Details from "./components/sidebar_details";
import Divider from "./components/sidebar_divider";
import Footer from "./components/sidebar_footer";
import Header from "./components/sidebar_header";

type SidebarProps = {
  onTabChange: (tab: Tab) => void;
};

export default function Sidebar({ onTabChange }: SidebarProps) {
  return (
    <div
      id="sidebar"
      className="self-center lg:overflow-y-hidden w-125 lg:min-w-100 max-w-full lg:max-w-1/3 lg:h-screen p-4 pb-0 flex flex-col items-center gap-4">
      <Header />
      <Divider />
      <About />
      <Divider />
      <Buttons
        onTabChange={onTabChange} />
      <Divider />
      <Copyright />
      <Details
        onTabChange={onTabChange} />
      <Footer />
    </div>
  );
}
