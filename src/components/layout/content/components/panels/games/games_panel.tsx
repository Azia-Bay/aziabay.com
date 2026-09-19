import { Tab } from "@/lib/types"

import Button from "@/components/layout/content/components/panels/games/components/games_button"

type GamesPanelProps = {
  onTabChange: (tab: Tab) => void;
};

export default function GamesPanel({ onTabChange }: GamesPanelProps) {
  return (
    <div className="scrollbar scroll-smooth overflow-y-auto flex-1 h-full flex flex-col gap-1">
      {/* <Button onClick={() => { onTabChange("games_page_bruit") }} title="Bruit" state="in-development" tagline="In a run-down and secluded high school, fight twisted monsters that range from lumbering, man-sized, severed hands to aggressive swarms of disembodied eyes." genres={[ "turn-based", "strategy", "tactics", "horror", "rpg" ]} src="content/panels/games/button_spread_bruit.gif" alt="An animated gif of Bruit gameplay. The game's art style consists of 1-bit (black & white) isometric pixel art. A camera pans between different characters in an anatomy classroom: two teenage boys and a man-sized severed hand, as they each take their turns in queue. One of the boys strides towards the hand and strikes it, and the hand strikes back." /> */}
      
      <Button onClick={() => { onTabChange("games_page_dstg") }} title="Don't Start the Game" state="released" date={new Date(2024, (3 - 1), 18)} tagline="Break the company mold, one rule at a time. A short and humorous interactive experience about annoying your co-workers and breaking company rules for the love of the game." genres={["adventure", "comedy"]} src="content/panels/games/button_spread_dstg.gif" alt="An animated gif of Don't Start the Game gameplay. The game's art style consists of 16-bit top-down pixel art. A camera follows a cartoonish man in a white button-up as he walks around an office building floor. He enters the floor through an elevator; picks up a key and three pieces of paper from the ground; uses the key on a safe to retrieve a bagel-shaped object; makes paper airplanes from the pieces of paper; throws the paper airplanes at his co-workers, who become annoyed and yell; then exits through the elevator from whence he came." imgW={1920 * 0.75} imgH={1080 * 0.75} />
    </div>
  );
}
