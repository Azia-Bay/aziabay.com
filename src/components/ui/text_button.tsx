"use client";

type TextButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function TextButton({ children, className, onClick }: TextButtonProps) {
  return (
    <button onClick={onClick} className={`cursor-pointer hover:underline underline-offset-2 ${className}`}>
      {children}
    </button>
  )
}
