import { Tab } from "@/lib/types"

import {
  LINK_TO_GITHUB,
  LINK_TO_LINKEDIN,
  LINK_TO_ITCHIO
} from "@/lib/consts";

import Button from "@/components/layout/sidebar/components/sidebar_button"

type SidebarSocialsProps = {
  onTabChange: (tab: Tab) => void;
};

export default function SidebarSocialsProps() {
  return (
    <div className="w-auto h-auto flex flex-row gap-1">
      <Button href={LINK_TO_LINKEDIN} target="_blank" src="sidebar/button_icon_linkedin.png" alt="A 1-bit (black & white) pixel art icon of the LinkedIn logo, with a shadow underneath adding three-dimensionality." />

      <Button href={LINK_TO_GITHUB} target="_blank" src="sidebar/button_icon_github.png" alt="A 1-bit (black & white) pixel art icon of the GitHub logo, with a shadow underneath adding three-dimensionality." />

      <Button href={LINK_TO_ITCHIO} target="_blank" src="sidebar/button_icon_itchio.png" alt="A 1-bit (black & white) pixel art icon of the itch.io logo, with a shadow underneath adding three-dimensionality." />
    </div>
  );
}
