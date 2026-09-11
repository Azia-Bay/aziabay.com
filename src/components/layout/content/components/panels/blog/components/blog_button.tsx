import Image from "next/image";

type BlogButtonProps = {
  onClick: () => void;
  date: Date;
  title: string;
  tagline: string;
  wordCount: number;
  viewCount: number;
  src: string;
  alt: string;
};

export default function BlogButton({onClick, date, title, tagline, wordCount, viewCount, src, alt}: BlogButtonProps) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const AVG_NONFICTION_WORDS_PER_MIN = 238;
  
  var min = Math.ceil(wordCount / AVG_NONFICTION_WORDS_PER_MIN);

  return (
    <button onClick={onClick} className="group relative cursor-pointer flex flex-row">
      <div className="min-w-1/2 mr-auto px-4 py-2 rounded-lg rounded-r-none border-4 border-r-0 border-background border-double bg-foreground text-background flex flex-col items-start">
        <div className="flex flex-row items-center gap-1 text-sm">
          <Image className="w-auto h-[1em]" src="/content/panels/blog/button_icon_calendar.png" alt="" width={0} height={0} unoptimized />

          <div>{year}/{month}/{day}</div>
        </div>

        <div className="text-lg font-bold uppercase">{title}</div>

        <div>{tagline}</div>

        <div className="mt-auto text-sm flex flex-row gap-1">
          <div>{min} min. read</div>
          <div>//</div>
          <div>{wordCount} words</div>
          <div>//</div>
          <div>{viewCount} views</div>
        </div>
      </div>
      
      <Image className="flex-1 rounded-lg rounded-l-none pixelated" src={src} alt={alt} width={0} height={0} unoptimized />
    </button>
  );
}
