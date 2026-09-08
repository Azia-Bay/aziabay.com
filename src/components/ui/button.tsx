"use client";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`cursor-pointer w-full p-2 rounded-lg border-4 border-black border-double bg-white text-black text-lg font-bold uppercase ${className}`}>
      {children}
    </button>
  )
}
