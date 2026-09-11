import Image from "next/image";

export default function BlogButton() {
  var title = "Devlog: The Creation of aziabay.com"
  var tagline = "And other nonsensical ramblings."
  
  var date = "2026/09/21"

  var num_min = 2
  var num_words = 200
  var num_views = 0

  return (
    <div className="group relative cursor-pointer flex flex-row">
      <div className="min-w-1/2 mr-auto px-4 py-2 rounded-lg rounded-r-none border-4 border-r-0 border-background border-double bg-foreground text-background flex flex-col">
        <div className="text-sm">(calendar icon) {date}</div>

        <div className="text-lg font-bold uppercase">{title}</div>

        <div>{tagline}</div>

        <div className="mt-auto text-sm flex flex-row gap-1">
          <div>{num_min} min. read</div>
          <div>//</div>
          <div>{num_words} words</div>
          <div>//</div>
          <div>{num_views} views</div>
        </div>
      </div>
      
      <Image className="flex-1 rounded-lg rounded-l-none pixelated" src="content/panels/contact/banner_arms.png" alt="A 1-bit (black & white) pixel art banner of two arms reaching out to one other. The arms are reminiscent of the masterwork The Creation of Adam by Michelangelo, except both arms are identical, resembling Adam's and not God's." width={0} height={0} unoptimized />
    </div>
  );
}
