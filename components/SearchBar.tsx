import Link from "next/link";
import { Icon } from "@/components/Icon";

export const SearchBar = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
  <label className="flex w-full items-center gap-3 rounded-full border border-[#e5e1d8] bg-white px-4 py-3 shadow-[0_5px_20px_-12px_#42564b] md:max-w-2xl md:px-6">
    <Icon name="search" />
    <input aria-label="Buscar alojamientos" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#829087]" placeholder="¿A dónde te apetece ir?" value={value} onChange={(event) => onChange(event.target.value)} />
    <span className="hidden border-l border-[#e5e1d8] pl-3 text-xs text-[#829087] sm:block">Fechas · Huéspedes</span>
    <Link href="/catalog" aria-label="Ver catálogo" className="grid size-8 shrink-0 place-items-center rounded-full bg-[#245448] text-white transition hover:bg-[#183d34]"><Icon name="arrow" /></Link>
  </label>
);
