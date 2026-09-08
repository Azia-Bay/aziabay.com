"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="cursor-pointer w-full p-2 rounded-lg border-4 border-black border-double bg-white text-black text-lg font-bold uppercase">
      {children}
    </button>
  )
}
