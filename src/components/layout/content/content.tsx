import { Tab } from "@/lib/types"

import BlogPanel from "@/components/layout/content/components/panels/blog/blog_panel"
import ContactPanel from "@/components/layout/content/components/panels/contact/contact_panel"
import GamesPanel from "@/components/layout/content/components/panels/games/games_panel"
import ResumePanel from "@/components/layout/content/components/panels/resume/resume_panel"
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
        {tab === "games" && <GamesPanel />}
        {tab === "blog" && <BlogPanel />}
        {tab === "resume" && <ResumePanel />}
        {tab === "contact" && <ContactPanel />}
      </div>
    </div>
  )
}
