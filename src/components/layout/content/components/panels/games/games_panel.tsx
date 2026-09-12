import { Tab } from "@/lib/types"

import Button from "@/components/layout/content/components/panels/games/components/games_button"

type GamesPanelProps = {
  onTabChange: (tab: Tab) => void;
};

export default function GamesPanel({ onTabChange }: GamesPanelProps) {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full flex flex-col gap-1">
      <Button onClick={() => { onTabChange("games_page_bruit") }} title="Bruit" state="in-development" tagline="In a run-down and secluded high school, fight twisted monsters that range from lumbering, man-sized, severed hands to aggressive swarms of disembodied eyes." genres={[ "turn-based", "strategy", "tactics", "horror", "rpg" ]} src="content/panels/games/button_spread_bruit.gif" alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's." />
    </div>
  );
}
