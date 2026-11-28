"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CategoryNav } from "@/components/CategoryNav";
import { StaySection } from "@/components/StaySection";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";
import { categories, stays as mockStays } from "@/lib/stays";
import type { Stay } from "@/types";

const HomePage = () => {
  const [stays, setStays] = useState<Stay[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todo");

  useEffect(() => {
    const timer = setTimeout(() => { setStays(mockStays); setLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const visible = useMemo(() => stays.filter((stay) => {
    const matchesText = `${stay.title} ${stay.location}`.toLowerCase().includes(query.toLowerCase());
    return matchesText && (category === "Todo" || stay.category === category);
  }), [stays, query, category]);

  return <main className="min-h-screen bg-[#fbfaf7] text-[#253a30]">
    <Header />
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <section className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12"><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[.22em] text-[#a66b3e]">Un lugar para estar</p><h1 className="max-w-xl font-serif text-3xl leading-tight tracking-tight md:text-5xl">Encuentra espacios que se sienten como <em className="text-[#56806d]">una pausa.</em></h1></div><SearchBar value={query} onChange={setQuery} /></section>
      <CategoryNav categories={categories} selected={category} onSelect={setCategory} />
      {loading ? <LoadingState label="Buscando rincones para ti…" /> : visible.length ? <StaySection title="Lugares para cambiar de aire" stays={visible} /> : <EmptyState title="No encontramos ese rincón" message="Prueba con otra palabra o categoría." />}
      <footer className="border-t border-[#e8e5df] py-7 text-xs text-[#8a958e]">Nido · escapadas con otra perspectiva</footer>
    </div>
  </main>;
};

export default HomePage;
