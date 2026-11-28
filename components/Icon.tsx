export const Icon = ({ name }: { name: "search" | "menu" | "user" | "star" | "pin" | "home" | "leaf" | "sun" | "water" | "heart" | "wifi" | "coffee" | "arrow" | "plus" | "minus" }) => {
  const glyphs: Record<string, string> = { search: "⌕", menu: "☰", user: "○", star: "★", pin: "⌖", home: "⌂", leaf: "❋", sun: "☼", water: "≈", heart: "♡", wifi: "◉", coffee: "♨", arrow: "→", plus: "+", minus: "−" };
  return <span aria-hidden="true" className="inline-flex items-center justify-center leading-none">{glyphs[name]}</span>;
};
