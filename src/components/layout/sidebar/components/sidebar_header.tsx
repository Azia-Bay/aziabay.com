import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="w-2/3 mt-11 flex flex-col">
      <div className="px-4 flex flex-row gap-1">
        <button className="group relative overflow-hidden cursor-pointer px-4 py-1 rounded-lg rounded-b-none border-4 border-b-0 border-background border-double flex flex-row items-center gap-1 bg-foreground text-background text-lg font-bold uppercase">
          <Image className="w-[1em] h-[1em]" src="/icon.png" alt="" width={0} height={0} />

          Azia Bay-Asen
        </button>
      </div>

      <Image className="cursor-pointer w-full rounded-lg border-4 border-foreground border-double pixelated" src="sidebar/headshot.gif" alt="A 1-bit (black & white) pixel art headshot of Azia Bay-Asen. He wears rectangular glasses." width={0} height={0} unoptimized loading="eager" />
    </div>
  );
}
