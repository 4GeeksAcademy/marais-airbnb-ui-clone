"use client";

import { useState } from "react";
import type { Room } from "@/types";
import { Icon } from "@/components/Icon";

export const BookingCard = ({ room }: { room: Room }) => {
  const [guests, setGuests] = useState(room.minGuests);
  const adjust = (amount: number) => setGuests((value) => Math.min(room.maxGuests, Math.max(room.minGuests, value + amount)));
  return <aside className="rounded-2xl border border-[#e3dfd6] bg-white p-5 shadow-[0_12px_35px_-25px_#253a30] md:sticky md:top-6">
    <p className="text-lg font-semibold text-[#293e33]">€{room.price} <span className="text-xs font-normal text-[#829087]">/ noche</span></p>
    <div className="mt-4 flex items-center justify-between rounded-xl border border-[#e5e1d8] p-3"><div><p className="text-xs font-medium text-[#34483f]">Huéspedes</p><p className="mt-1 text-[10px] text-[#829087]">{guests} {guests === 1 ? "persona" : "personas"}</p></div><div className="flex items-center gap-3"><button aria-label="Quitar huésped" disabled={guests <= room.minGuests} onClick={() => adjust(-1)} className="grid size-8 place-items-center rounded-full border disabled:opacity-40"><Icon name="minus" /></button><button aria-label="Agregar huésped" disabled={guests >= room.maxGuests} onClick={() => adjust(1)} className="grid size-8 place-items-center rounded-full border disabled:opacity-40"><Icon name="plus" /></button></div></div>
    <button className="mt-4 w-full rounded-full bg-[#245448] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#183d34]">Consultar disponibilidad</button><p className="mt-3 text-center text-[10px] text-[#829087]">Sin cargos hasta confirmar · Demo visual</p>
  </aside>;
};
