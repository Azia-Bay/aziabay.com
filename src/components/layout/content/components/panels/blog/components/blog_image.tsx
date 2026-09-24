"use client";

import Image from "next/image";

import { useModal } from "@/lib/modal_context";

type BlogImageProps = {
  title: string;
  src: string;
  alt: string;
  maxW?: string;
  pixelated?: boolean;
};

export default function BlogImage({ title, src, alt, maxW = "", pixelated = false }: BlogImageProps) {
  const { openModal } = useModal()!;

  return (
    <button
      onClick={
        () => openModal(
          title,
          <Image
            src={src}
            alt={alt}
            className={`object-contain ${pixelated ? "pixelated" : ""}`}
            fill
            unoptimized />
        )
      }
      className={`cursor-pointer relative group overflow-hidden w-full xl:w-3/4 ${maxW} flex items-center justify-center`}>
      <Image
        src={src}
        alt={alt}
        className={`w-full h-auto p-5 group-hover:scale-105 transition-transform duration-300 ease-out ${pixelated ? "pixelated" : ""}`}
        width={0}
        height={0}
        unoptimized />
    </button>
  );
}
