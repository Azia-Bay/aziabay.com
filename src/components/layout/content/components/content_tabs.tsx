import { motion } from "motion/react";

import { Tab } from "@/lib/types"

import ContentTab from "@/components/layout/content/components/content_tab"

type ContentTabsProps = {
  tab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function ContentTabs({ tab, onTabChange }: ContentTabsProps) {
  const TABS: Tab[] = ["games", "blog", "resume", "contact"];

  const LABELS: Record<Tab, string> = {
    games: "Games",
    blog: "Blog",
    resume: "Resume",
    contact: "Contact"
  };

  const orderedTabs = [tab, ...TABS.filter((t) => t !== tab)];

  return (
    <nav className="self-end px-4 flex flex-row gap-1">
      {orderedTabs.map((tab) => (
        <motion.div key={tab} layout transition={{ type: "spring", stiffness: 400, damping: 35 }}>
          <ContentTab onClick={() => onTabChange(tab)}>
            {LABELS[tab]}
          </ContentTab>
        </motion.div>
      ))}
    </nav>
  );
}
