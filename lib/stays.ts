import type { Room, Stay } from "@/types";

export const stays: Stay[] = [
  { id: "casa-luz", title: "Casa Luz entre naranjos", location: "Vejer · Andalucía", price: 128, rating: 4.96, reviews: 84, category: "Casas con encanto", imageTone: "from-amber-200 via-orange-100 to-rose-100" },
  { id: "loft-sal", title: "Loft Sal y luz", location: "El Cabanyal · Valencia", price: 96, rating: 4.89, reviews: 126, category: "Diseño", imageTone: "from-sky-200 via-cyan-100 to-stone-100" },
  { id: "refugio-pedra", title: "Refugio de piedra", location: "Valldemossa · Mallorca", price: 174, rating: 4.98, reviews: 57, category: "Naturaleza", imageTone: "from-lime-200 via-stone-100 to-amber-100" },
  { id: "cabanas-norte", title: "Cabañas del norte", location: "Llanes · Asturias", price: 112, rating: 4.91, reviews: 203, category: "Naturaleza", imageTone: "from-emerald-200 via-teal-100 to-slate-100" },
  { id: "patio-azahar", title: "Patio de azahar", location: "Córdoba · Andalucía", price: 84, rating: 4.87, reviews: 91, category: "Casas con encanto", imageTone: "from-yellow-200 via-orange-100 to-rose-100" },
  { id: "casa-bruma", title: "Casa Bruma", location: "Cadaqués · Girona", price: 205, rating: 4.94, reviews: 68, category: "Frente al mar", imageTone: "from-blue-200 via-cyan-100 to-slate-100" },
  { id: "estudio-oliva", title: "Estudio Oliva", location: "Gràcia · Barcelona", price: 119, rating: 4.82, reviews: 148, category: "Diseño", imageTone: "from-green-200 via-lime-100 to-stone-100" },
  { id: "masia-verde", title: "Masía entre viñas", location: "Penedès · Catalunya", price: 158, rating: 4.93, reviews: 43, category: "Naturaleza", imageTone: "from-violet-200 via-stone-100 to-green-100" },
];

export const rooms: Room[] = stays.map((stay, index) => ({
  ...stay,
  images: [stay.imageTone, "from-amber-200 via-rose-100 to-slate-100", "from-emerald-200 via-stone-100 to-sky-100"],
  hostName: ["Marina", "Pau", "Joana", "Iñigo", "Lucía", "Núria", "Clara", "Adrià"][index],
  hostYears: 3 + index,
  amenities: ["Wifi", "Cocina equipada", "Aire acondicionado", "Espacio exterior", "Lavadora", "Cafetera"],
  minGuests: 1,
  maxGuests: 8,
}));

export const categories = ["Todo", "Frente al mar", "Naturaleza", "Diseño", "Casas con encanto"];
