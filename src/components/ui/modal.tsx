import { createPortal } from "react-dom";
import { useEffect } from "react";

type ModalProps = {
  onClose: () => void;
  title: string | null;
  children?: React.ReactNode;
}

export default function Modal({ onClose, title, children }: ModalProps) {
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      className="cursor-pointer fixed inset-0 z-50 p-10">
      <div
        onClick={(e) => e.stopPropagation()}
        className="cursor w-full h-full rounded-lg border-4 border-foreground border-double bg-background flex flex-col">
        <div
          className="border-b-4 border-foreground border-double flex flex-row justify-between">
          <div
            className="px-4 py-2 text-xl font-bold">
            {title}
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 text-xl font-bold hover:scale-125 transition-transform duration-300 ease-out">
            X
          </button>
        </div>

        <div
          className="relative flex-1 min-h-0 m-8">
          {children}
        </div>
      </div>
    </div>,

    document.body
  );
}
