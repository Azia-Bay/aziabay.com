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
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEscape);
    
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return createPortal(
    <div onClick={onClose} className="cursor-pointer absolute left-0 top-0 z-50 w-screen h-screen p-10">
      <div onClick={(e) => e.stopPropagation()} className="cursor flex-1 w-full h-full rounded-lg border-4 border-foreground border-double bg-background flex flex-col">
        <div className="border-b-4 border-foreground border-double flex flex-row justify-between">
          <div className="px-4 py-2 text-xl font-bold">
            {title}
          </div>

          <button onClick={onClose} className="cursor-pointer px-4 py-2 text-xl font-bold">
            X
          </button>
        </div>

        <div className="flex-1 min-h-0 p-8 flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
