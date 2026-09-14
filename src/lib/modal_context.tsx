"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import Modal from "@/components/ui/modal"

type ModalContext = {
  openModal: (title: string, content?: ReactNode) => void;
  closeModal: () => void;
};

const MODAL_CONTEXT = createContext<ModalContext | null>(null);

type ModalProviderProps = {
  children?: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<ReactNode | null>(null);

  function openModal(title: string, content?: ReactNode) {
    setTitle(title);
    setContent(content);
  }

  function closeModal() {
    setTitle(null);
    setContent(null);
  }

  return (
    <MODAL_CONTEXT.Provider value={{ openModal, closeModal }}>
      {children}
      {content && <Modal onClose={closeModal} title={title}>{content}</Modal>}
    </MODAL_CONTEXT.Provider>
  );
}

export function useModal() {
  return useContext(MODAL_CONTEXT);
}
