"use client";

import { useState } from "react";

export const RoomGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [active, setActive] = useState(0);
  const change = (direction: number) => setActive((active + direction + images.length) % images.length);
  return <section aria-label="Galería de fotos" className="relative grid h-64 grid-cols-1 gap-2 overflow-hidden rounded-2xl sm:h-80 md:h-[26rem]">
    <div className={`absolute inset-0 bg-gradient-to-br ${images[active]}`}><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_25%,#fff9,transparent_35%),linear-gradient(150deg,transparent_40%,#24463850)]" /></div>
    <button onClick={() => change(-1)} className="absolute left-3 top-1/2 rounded-full bg-white/90 px-3 py-2 text-xs shadow">Anterior</button><button onClick={() => change(1)} className="absolute right-3 top-1/2 rounded-full bg-white/90 px-3 py-2 text-xs shadow">Siguiente</button>
    <span className="absolute bottom-3 right-3 rounded-full bg-white/85 px-3 py-1 text-xs text-[#30473b]">{active + 1} / {images.length}</span><span className="sr-only">{title}</span>
  </section>;
};
