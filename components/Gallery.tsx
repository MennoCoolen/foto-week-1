"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const images = Array.from({ length: 10 }, (_, i) => `/img/${i + 1}.jpg`);

export default function Gallery() {

  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);

  const next = () => {
    if (index === null) return;
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    if (index === null) return;
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-neutral-950 text-white">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">

        <Image
          src="/img/1.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover opacity-30 scale-110"
        />

        <div className="relative z-10">

          <h1 className="text-6xl md:text-7xl font-light tracking-[0.25em]">
            MIJN FOTOGALERIJ
          </h1>

          <p className="text-neutral-400 mt-6 text-lg">
            Een selectie van mijn fotografisch werk
          </p>

        </div>

      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-8 py-32 columns-1 sm:columns-2 lg:columns-3 gap-6">

        {images.map((src, i) => (
          <div
            key={src}
            onClick={() => open(i)}
            className="relative mb-6 break-inside-avoid group cursor-pointer animate-fade"
          >

            <Image
              src={src}
              alt={`Foto ${i + 1}`}
              width={900}
              height={900}
              className="rounded-xl hover:scale-105 transition duration-500"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">

              <span className="tracking-widest text-white">
                Bekijk foto
              </span>

            </div>

          </div>
        ))}

      </section>

      {/* LIGHTBOX */}
      {index !== null && (
        <Lightbox
          images={images}
          index={index}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}

    </div>
  );
}