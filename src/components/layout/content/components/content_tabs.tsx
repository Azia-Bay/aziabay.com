import { Tab } from "@/lib/types"

import ContentTab from "@/components/layout/content/components/content_tab"

type ContentTabsProps = {
  onTabChange: (tab: Tab) => void;
};

export default function ContentTabs({ onTabChange }: ContentTabsProps) {
  return (
    <nav className="self-end px-4 flex flex-row gap-1">
      <ContentTab onClick={() => onTabChange("games")}>Games</ContentTab>
      <ContentTab onClick={() => onTabChange("blog")}>Blog</ContentTab>
      <ContentTab onClick={() => onTabChange("resume")}>Resume</ContentTab>
      <ContentTab onClick={() => onTabChange("contact")}>Contact</ContentTab>
    </nav>
  );
}
