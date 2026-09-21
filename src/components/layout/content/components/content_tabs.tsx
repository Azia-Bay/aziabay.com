import { motion } from "motion/react";

import { Tab } from "@/lib/types";

import ContentTab from "@/components/layout/content/components/content_tab";

type ContentTabsProps = {
  tab: Tab;
  onTabChange: (tab: Tab) => void;
};

const TABS: Tab[] = ["games", "blog", "resume", "contact"];

const DEFAULT_LABEL = "★";

const LABELS: Partial<Record<Tab, string>> = {
  games: "Games",
  blog: "Blog",
  resume: "Resume",
  contact: "Contact"
};

export default function ContentTabs({ tab, onTabChange }: ContentTabsProps) {
  const orderedTabs = [tab, ...TABS.filter((t) => t !== tab)];

  return (
    <nav
      className="px-2 sm:px-4 flex flex-row gap-1">
      {orderedTabs.map((orderedTab) => (
        <motion.div
          key={orderedTab}
          className={orderedTab === tab ? "mr-auto" : ""}
          layout
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30
          }}>
          <ContentTab
            onClick={() => { onTabChange(orderedTab) }}>
            {LABELS[orderedTab] ?? DEFAULT_LABEL}
          </ContentTab>
        </motion.div>
      ))}
    </nav>
  );
}
