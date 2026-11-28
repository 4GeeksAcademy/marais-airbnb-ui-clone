import { Suspense } from "react";
import { RoomDetail } from "@/components/RoomDetail";
import { LoadingState } from "@/components/LoadingState";

const RoomPage = ({ params }: PageProps<"/rooms/[id]">) => (
  <Suspense fallback={<main className="min-h-screen bg-[#fbfaf7] p-8"><LoadingState label="Abriendo alojamiento…" /></main>}>
    {params.then(({ id }) => <RoomDetail id={id} />)}
  </Suspense>
);

export default RoomPage;
