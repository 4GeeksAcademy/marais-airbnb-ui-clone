import Link from "next/link";
import { Header } from "@/components/Header";
import { CatalogResults } from "@/components/CatalogResults";
import { MapPanel } from "@/components/MapPanel";
import { stays } from "@/lib/stays";

const CatalogPage = () => (
  <main className="min-h-screen bg-[#fbfaf7] text-[#253a30]">
    <Header />
    <div className="mx-auto max-w-7xl px-5 py-7 md:px-10 md:py-10">
      <Link href="/" className="mb-6 inline-flex text-xs text-[#63756a] hover:text-[#245448]">← Volver a explorar</Link>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,.8fr)] md:items-start">
        <CatalogResults stays={stays} />
        <div className="order-last md:order-none"><MapPanel /></div>
      </div>
    </div>
  </main>
);

export default CatalogPage;
