"use client"

type ContentTabProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function ContentTab({ children, onClick }: ContentTabProps) {
  return (
    <button onClick={onClick} className="group relative overflow-hidden cursor-pointer px-4 py-1 rounded-lg rounded-b-none border-4 border-b-0 border-background border-double bg-foreground text-background text-lg font-bold uppercase">
      <span className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out pixelated bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--background)_0%_25%,var(--foreground)_25%_50%)]" />

      {children &&
        <span className="group relative z-10">
          {children}

          <span className="absolute left-0 bottom-0 w-full h-px bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out" />
        </span>
      }
    </button>
  );
}
