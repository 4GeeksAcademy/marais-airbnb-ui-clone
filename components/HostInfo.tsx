import { Icon } from "@/components/Icon";

export const HostInfo = ({ name, years }: { name: string; years: number }) => (
  <section className="flex items-center gap-4 border-b border-[#e5e1d8] py-6"><span className="grid size-12 place-items-center rounded-full bg-[#dfe8de] font-serif text-xl text-[#31574a]">{name.slice(0, 1)}</span><div><h2 className="text-sm font-semibold text-[#293e33]">Te recibe {name}</h2><p className="mt-1 flex items-center gap-1 text-xs text-[#829087]"><Icon name="star" /> {years} años como anfitrión</p></div></section>
);
