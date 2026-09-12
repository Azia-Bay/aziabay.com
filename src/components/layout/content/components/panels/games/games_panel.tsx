import { Tab } from "@/lib/types"

import Button from "@/components/layout/content/components/panels/games/components/games_button"

type GamesPanelProps = {
  onTabChange: (tab: Tab) => void;
};

export default function GamesPanel({ onTabChange }: GamesPanelProps) {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full flex flex-col gap-1">
      <Button onClick={() => { onTabChange("games_page_bruit") }} title="Bruit" state="in-development" tagline="In a run-down and secluded high school, fight twisted monsters that range from lumbering, man-sized, severed hands to aggressive swarms of disembodied eyes." genres={[ "turn-based", "strategy", "tactics", "horror", "rpg" ]} src="content/panels/games/button_spread_bruit.gif" alt="An animated gif of Bruit gameplay. The game's art style consists of 1-bit (black & white) isometric pixel art. A camera pans between different characters in an anatomy classroom: two teenage boys and a man-sized severed hand, as they each take their turns in queue. One of the boys strides towards the hand and strikes it, and the hand strikes back." />
    </div>
  );
}
