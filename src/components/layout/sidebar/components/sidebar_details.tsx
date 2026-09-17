import { Tab } from "@/lib/types"
import { LINK_TO_SITE_SOURCE } from "@/lib/consts";

import LightSwitch from "./sidebar_light_switch";
import TextButton from "./sidebar_text_button";

type SidebarDetailsProps = {
  onTabChange: (tab: Tab) => void;
};

export default function SidebarDetails({ onTabChange }: SidebarDetailsProps) {
  return (
    <div className="mt-auto flex flex-col">
      <LightSwitch />

      <div className="flex flex-row gap-1">
        <TextButton onClick={() => { onTabChange("blog_page_aziabay") }}>How did I make this site?</TextButton>
        //
        <TextButton href={LINK_TO_SITE_SOURCE} target="_blank">source code</TextButton>
      </div>
    </div>
  );
}
