"use client";

import { useEffect } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onNext,
  onPrev,
}: Props) {

  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {

      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [onNext, onPrev, onClose]);


  return (
    <div
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
      onClick={onClose}
    >

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-10 text-white text-6xl hover:scale-125 transition"
      >
        ‹
      </button>

      <Image
        src={images[index]}
        alt="Foto"
        width={1400}
        height={900}
        className="max-h-[85vh] w-auto rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-10 text-white text-6xl hover:scale-125 transition"
      >
        ›
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-8 right-8 text-white text-4xl hover:scale-125 transition"
      >
        ✕
      </button>

    </div>
  );
}