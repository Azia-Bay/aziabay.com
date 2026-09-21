"use client";

import { createContext, useContext, useState } from "react";

import Modal from "@/components/ui/modal"

type ModalContext = {
  openModal: (title: string, content: React.ReactNode) => void;
  closeModal: () => void;
};

const modal_context = createContext<ModalContext | null>(null);

type ModalProviderProps = {
  children?: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  function openModal(title: string, content: React.ReactNode) {
    setTitle(title);
    setContent(content);
  }

  function closeModal() {
    setTitle(null);
    setContent(null);
  }

  return (
    <modal_context.Provider
      value={{ openModal, closeModal }}>
      {children}

      {title && content &&
        <Modal
          onClose={closeModal}
          title={title}>
          {content}
        </Modal>
      }
    </modal_context.Provider>
  );
}

export function useModal() {
  return useContext(modal_context);
}
