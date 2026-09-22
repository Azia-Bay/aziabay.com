type HoveredDitherProps = {
  className?: string;
  isHovered?: boolean;
  fromBottom?: boolean;
}

export default function HoveredDither({ className = "", isHovered, fromBottom = true }: HoveredDitherProps) {
  return (
    <span
      className={`${className} absolute inset-0 ${!fromBottom ? (isHovered === undefined ? "translate-x-full group-hover:translate-x-0" : (isHovered ? "translate-x-0" : "translate-x-full")) : ""} ${fromBottom ? (isHovered === undefined ? "translate-y-full group-hover:translate-y-3/4" : (isHovered ? "translate-y-3/4" : "translate-y-full")) : ""} transition-transform duration-200 ease-out bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--dark)_0%_25%,transparent_25%_50%)]`} />
  );
}
