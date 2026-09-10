import { Tab } from "@/lib/types"

import Tabs from "@/components/layout/content/components/content_tabs"

type ContentProps = {
  tab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function Content({ tab, onTabChange }: ContentProps) {
  return (
    <div className="flex-1 p-15 flex flex-col">
      <Tabs tab={tab} onTabChange={onTabChange} />

      <div className="flex-1 p-5 rounded-lg border-4 border-foreground border-double">
        {tab === "games" && <div>Games</div>}
        {tab === "blog" && <div>Blog</div>}
        {tab === "resume" && <div>Resume</div>}
        {tab === "contact" && <div>Contact</div>}
      </div>
    </div>
  )
}
