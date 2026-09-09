"use client";

type TextButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function SidebarTextButton({ children, onClick }: TextButtonProps) {
  return (
    <button onClick={onClick} className="cursor-pointer hover:underline underline-offset-2">
      {children}
    </button>
  )
}
