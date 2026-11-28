"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { RoomGallery } from "@/components/RoomGallery";
import { RoomOverview } from "@/components/RoomOverview";
import { HostInfo } from "@/components/HostInfo";
import { AmenitiesList } from "@/components/AmenitiesList";
import { BookingCard } from "@/components/BookingCard";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";
import { rooms } from "@/lib/stays";
import type { Room } from "@/types";

export const RoomDetail = ({ id }: { id: string }) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loadedId, setLoadedId] = useState<string | null>(null);
  const loading = loadedId !== id;
  useEffect(() => {
    const timer = setTimeout(() => { setRoom(rooms.find((item) => item.id === id) ?? null); setLoadedId(id); }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  return <main className="min-h-screen bg-[#fbfaf7] text-[#253a30]"><Header /><div className="mx-auto max-w-6xl px-5 py-6 md:px-10 md:py-8"><Link href="/catalog" className="mb-5 inline-flex text-xs text-[#63756a] hover:text-[#245448]">← Volver al catálogo</Link>{loading ? <LoadingState label="Preparando los detalles…" /> : room ? <><RoomGallery images={room.images} title={room.title} /><RoomOverview room={room} /><div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-12"><div><HostInfo name={room.hostName} years={room.hostYears} /><AmenitiesList amenities={room.amenities} /></div><div className="pt-6"><BookingCard room={room} /></div></div></> : <EmptyState title="No encontramos este alojamiento" message="Puede que el enlace haya cambiado. Explora el catálogo para ver otras estancias." />}</div></main>;
};
