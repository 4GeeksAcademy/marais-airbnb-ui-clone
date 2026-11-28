import type { Stay } from "@/types";
import { ListingCard } from "@/components/ListingCard";

export const StaySection = ({ title, stays }: { title: string; stays: Stay[] }) => (
  <section className="py-6">
    <div className="mb-5 flex items-end justify-between"><h2 className="font-serif text-2xl tracking-tight text-[#253a30] md:text-3xl">{title}</h2><span className="text-xs text-[#829087]">{stays.length} {stays.length === 1 ? "lugar" : "lugares"}</span></div>
    <div className="grid grid-cols-1 gap-x-5 gap-y-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{stays.map((stay) => <ListingCard key={stay.id} stay={stay} />)}</div>
  </section>
);
