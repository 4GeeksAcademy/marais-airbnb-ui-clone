const amenityIcons = ["◉", "⌂", "☼", "✿", "↻", "♨"];

export const AmenitiesList = ({ amenities }: { amenities: string[] }) => (
  <section className="border-b border-[#e5e1d8] py-6"><h2 className="mb-4 font-serif text-xl text-[#293e33]">Lo que ofrece este lugar</h2><ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">{amenities.map((amenity, index) => <li key={amenity} className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 text-xs text-[#53645a]"><span className="text-base text-[#39715d]">{amenityIcons[index % amenityIcons.length]}</span>{amenity}</li>)}</ul></section>
);
