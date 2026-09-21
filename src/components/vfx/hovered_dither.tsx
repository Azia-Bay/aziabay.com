export default function HoveredDither() {
  return (
    <span
      className="absolute inset-0 translate-y-full group-hover:translate-y-3/4 transition-transform duration-200 ease-out bg-size-[2px_2px] bg-[repeating-conic-gradient(var(--dark)_0%_25%,transparent_25%_50%)]" />
  );
}
