type HoveredUnderlineProps = {
  bottom?: string;
  h?: string;
  color?: string;
  isHovered?: boolean;
};

export default function HoveredUnderline({ bottom = "1", h = "px", color = "dark", isHovered }: HoveredUnderlineProps) {
  return (
    <span
      className={`absolute left-0 bottom-${bottom} w-full h-${h} bg-${color} ${isHovered === undefined ? "scale-x-0 group-hover:scale-x-100" : (isHovered ? "scale-x-100" : "scale-x-0")} transition-transform duration-150 ease-out`} />
  );
}
