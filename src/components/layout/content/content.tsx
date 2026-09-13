import { Tab } from "@/lib/types"

import Tabs from "@/components/layout/content/components/content_tabs"

import GamesPanel from "@/components/layout/content/components/panels/games/games_panel"
import BlogPanel from "@/components/layout/content/components/panels/blog/blog_panel"
import ResumePanel from "@/components/layout/content/components/panels/resume/resume_panel"
import ContactPanel from "@/components/layout/content/components/panels/contact/contact_panel"

import BruitGamesPage from "@/components/layout/content/components/panels/games/pages/bruit_page"

import AziabayBlogPage from "@/components/layout/content/components/panels/blog/pages/aziabay_page"

type ContentProps = {
  tab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function Content({ tab, onTabChange }: ContentProps) {
  return (
    <div className="flex-1 min-h-0 p-10 pb-5 flex flex-col">
      <Tabs tab={tab} onTabChange={onTabChange} />

      <main className="flex-1 h-full min-h-0 p-5 rounded-lg border-4 border-foreground border-double">
        {tab === "games" && <GamesPanel onTabChange={onTabChange} />}
        {tab === "blog" && <BlogPanel onTabChange={onTabChange} />}
        {tab === "resume" && <ResumePanel />}
        {tab === "contact" && <ContactPanel />}
        
        {tab === "games_page_bruit" && <BruitGamesPage />}
        
        {tab === "blog_page_aziabay" && <AziabayBlogPage />}
      </main>
    </div>
  )
}
