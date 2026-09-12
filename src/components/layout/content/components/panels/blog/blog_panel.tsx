import { Tab } from "@/lib/types"

import Button from "@/components/layout/content/components/panels/blog/components/blog_button"

type BlogPanelProps = {
  onTabChange: (tab: Tab) => void;
};

export default function BlogPanel({ onTabChange }: BlogPanelProps) {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full flex flex-col gap-1">
      <Button onClick={() => { onTabChange("blog_page_aziabay") }} date={new Date(2026, (9 - 1), 21)} title="Devlog: The Creation of aziabay.com" tagline="And other ramblings of the mad." wordCount={200} src="content/panels/blog/button_spread_aziabay.png" alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's." />
    </div>
  );
}
