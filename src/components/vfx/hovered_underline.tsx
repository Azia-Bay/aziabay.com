type HoveredUnderlineProps = {
  origin?: string;
  bottom?: string;
  h?: string;
  bgColor?: string;
  isHovered?: boolean;
};

export default function HoveredUnderline({ origin = "", bottom = "bottom-1", h = "h-px", bgColor = "bg-dark", isHovered }: HoveredUnderlineProps) {
  return (
    <span
      className={`absolute ${origin} left-0 ${bottom} w-full ${h} ${bgColor} ${isHovered === undefined ? "scale-x-0 group-hover:scale-x-100" : (isHovered ? "scale-x-100" : "scale-x-0")} transition-transform duration-150 ease-out`} />
  );
}
