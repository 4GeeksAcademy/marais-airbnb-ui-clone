"use client";

import { useState } from "react";
import type { SortOrder, Stay } from "@/types";
import { ListingCard } from "@/components/ListingCard";
import { EmptyState } from "@/components/EmptyState";

export const CatalogResults = ({ stays }: { stays: Stay[] }) => {
  const [order, setOrder] = useState<SortOrder>("asc");
  const sorted = [...stays].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  return <section>
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs text-[#849087]">Selección Nido</p><h1 className="mt-1 font-serif text-2xl text-[#253a30]">{stays.length} alojamientos</h1></div><label className="flex items-center gap-2 text-xs text-[#58695f]">Precio <select aria-label="Ordenar precio" value={order} onChange={(event) => setOrder(event.target.value as SortOrder)} className="rounded-full border border-[#dedbd3] bg-white px-3 py-2"><option value="asc">Menor a mayor</option><option value="desc">Mayor a menor</option></select></label></div>
    {sorted.length ? <div className="grid grid-cols-1 gap-x-5 gap-y-7 md:grid-cols-2 lg:grid-cols-3">{sorted.map((stay) => <ListingCard key={stay.id} stay={stay} />)}</div> : <EmptyState title="No encontramos alojamientos" message="Probá con otra búsqueda desde Inicio." />}
  </section>;
};
