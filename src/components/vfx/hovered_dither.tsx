type HoveredDitherProps = {
  size?: number;
  isHovered?: boolean;
}

export default function HoveredDither({ size = 2, isHovered }: HoveredDitherProps) {
  return (
    <span
      className={`absolute inset-0 ${isHovered === undefined ? "translate-y-full group-hover:translate-y-3/4" : (isHovered ? "translate-y-3/4" : "translate-y-full")} transition-transform duration-200 ease-out bg-size-[${size}px_${size}px] bg-[repeating-conic-gradient(var(--dark)_0%_25%,transparent_25%_50%)]`} />
  );
}
