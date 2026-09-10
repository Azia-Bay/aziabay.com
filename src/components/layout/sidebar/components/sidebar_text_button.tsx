"use client";

type TextButtonProps = {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
};

export default function SidebarTextButton({ children, href, target, onClick }: TextButtonProps) {
  var ele = (
    <button onClick={onClick} className="cursor-pointer hover:underline underline-offset-2">
      {children}
    </button>
  );

  if (!href) return ele;

  return (
    <a href={href} target={target}>
      {ele}
    </a>
  );
}
