import Link from "next/link";
import type { Stay } from "@/types";
import { Icon } from "@/components/Icon";

export const ListingCard = ({ stay }: { stay: Stay }) => (
  <Link href={`/rooms/${stay.id}`} className="group block min-w-0">
    <div className={`relative mb-3 aspect-[1.16] overflow-hidden rounded-2xl bg-gradient-to-br ${stay.imageTone} transition duration-300 group-hover:shadow-lg`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#ffffff99,transparent_38%),linear-gradient(160deg,transparent_40%,#314c3740)]" />
    </div>
    <div className="flex items-start justify-between gap-2"><h3 className="text-sm font-semibold leading-snug text-[#273b31]">{stay.title}</h3><span className="flex shrink-0 items-center gap-1 text-xs text-[#304239]"><Icon name="star" />{stay.rating}</span></div>
    <p className="mt-1 text-xs text-[#849087]">{stay.location}</p>
    <p className="mt-2 text-sm text-[#304239]"><strong className="font-semibold">€{stay.price}</strong> <span className="text-xs text-[#849087]">por noche</span></p>
  </Link>
);
