type HoveredUnderlineProps = {
  bottom?: string;
  h?: string;
  color?: string;
};

export default function HoveredUnderline({ bottom, h, color }: HoveredUnderlineProps) {
  return (
    <span
      className={`absolute left-0 bottom-${bottom || "1"} w-full h-${h || "px"} bg-${color || "dark"} scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out`} />
  );
}
