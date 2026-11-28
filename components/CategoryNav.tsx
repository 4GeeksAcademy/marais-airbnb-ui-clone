import { Icon } from "@/components/Icon";

const iconFor: Record<string, "home" | "leaf" | "sun" | "water"> = { "Todo": "home", "Frente al mar": "water", Naturaleza: "leaf", Diseño: "sun", "Casas con encanto": "home" };

export const CategoryNav = ({ categories, selected, onSelect }: { categories: string[]; selected: string; onSelect: (category: string) => void }) => (
  <nav aria-label="Categorías" className="flex gap-7 overflow-x-auto border-b border-[#e8e5df] py-4 [scrollbar-width:none]">
    {categories.map((category) => <button key={category} onClick={() => onSelect(category)} className={`flex shrink-0 flex-col items-center gap-2 border-b-2 pb-2 text-xs transition ${selected === category ? "border-[#245448] text-[#245448]" : "border-transparent text-[#7b8880] hover:text-[#245448]"}`}><Icon name={iconFor[category] ?? "home"} /><span>{category}</span></button>)}
  </nav>
);
