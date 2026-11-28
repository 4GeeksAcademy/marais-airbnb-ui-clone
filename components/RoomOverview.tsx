import type { Room } from "@/types";
import { Icon } from "@/components/Icon";

export const RoomOverview = ({ room }: { room: Room }) => (
  <section className="border-b border-[#e5e1d8] py-6">
    <p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-[#a66b3e]">Estancia Nido · {room.category}</p>
    <h1 className="font-serif text-3xl leading-tight tracking-tight text-[#24392f] md:text-4xl">{room.title}</h1>
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#52645a]"><span className="flex items-center gap-1"><Icon name="star" />{room.rating} <span className="text-[#849087]">({room.reviews} reseñas)</span></span><span className="flex items-center gap-1"><Icon name="pin" />{room.location}</span></div>
  </section>
);
