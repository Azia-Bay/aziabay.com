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
    contact: "Contact",

    games_page_bruit: "★",
    games_page_dstg: "★",

    blog_page_aziabay: "★"
  };

  const orderedTabs = [tab, ...TABS.filter((t) => t !== tab)];

  return (
    <nav className="max-sm:px-2 sm:px-4 flex flex-row gap-1">
      {orderedTabs.map((t) => (
        <motion.div key={t} className={t === tab ? "mr-auto" : "" } layout transition={{ type: "spring", stiffness: 350, damping: 30 }}>
          <ContentTab onClick={() => { onTabChange(t) }}>
            {LABELS[t]}
          </ContentTab>
        </motion.div>
      ))}
    </nav>
  );
}
