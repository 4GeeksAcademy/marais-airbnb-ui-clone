import Link from "next/link";
import { Icon } from "@/components/Icon";

export const Header = () => (
  <header className="border-b border-[#e6e2d9] bg-[#fbfaf7]">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
      <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[#245448]">
        <span className="grid size-8 place-items-center rounded-xl bg-[#245448] text-sm text-white">n</span> nido
      </Link>
      <Link href="/catalog" className="hidden rounded-full border border-[#dedbd3] px-5 py-2 text-sm text-[#52615a] transition hover:border-[#245448] md:block">Encuentra tu próxima pausa</Link>
      <button aria-label="Menú de usuario" className="flex items-center gap-3 rounded-full border border-[#dedbd3] bg-white p-2 pl-3 text-[#34483f]"><Icon name="menu" /><span className="grid size-7 place-items-center rounded-full bg-[#e9eee8]"><Icon name="user" /></span></button>
    </div>
  </header>
);
