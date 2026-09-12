import Image from "next/image";

type BlogButtonProps = {
  onClick: () => void;
  date: Date;
  title: string;
  tagline: string;
  wordCount: number;
  src: string;
  alt: string;
};

export default function BlogButton({onClick, date, title, tagline, wordCount, src, alt}: BlogButtonProps) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const AVG_NONFICTION_WORDS_PER_MIN = 238;
  
  var min = Math.ceil(wordCount / AVG_NONFICTION_WORDS_PER_MIN);

  return (
    <button onClick={onClick} className="group relative overflow-hidden cursor-pointer shrink-0 min-h-31.25 flex flex-row">
      <div className="relative overflow-hidden w-125 px-4 py-2 rounded-lg rounded-r-none border-4 border-r-0 border-background border-double bg-foreground text-background flex flex-col items-start">
        <span className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--background)_0%_25%,var(--foreground)_25%_50%)]" />

        <div className="z-10 flex flex-row items-center gap-1 text-sm">
          <Image className="w-auto h-[1em]" src="/content/panels/blog/button_icon_calendar.png" alt="" width={0} height={0} unoptimized />

          <div>{year}/{month}/{day}</div>
        </div>

        <div className="relative z-10">
          <div className="text-lg font-bold uppercase">{title}</div>

          <span className="absolute origin-left left-0 bottom-0.5 w-full h-0.5 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
        </div>

        <div className="z-10 text-start">{tagline}</div>

        <div className="z-10 mt-auto text-sm flex flex-row gap-1">
          <div>{min} min. read</div>
          <div>//</div>
          <div>{wordCount} words</div>
        </div>
      </div>
            
      <div className="relative flex-1 overflow-hidden rounded-lg rounded-l-none border-4 border-l-0 border-background border-double">
        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-none pixelated" src={src} alt={alt} width={0} height={0} unoptimized />
      </div>
    </button>
  );
}
