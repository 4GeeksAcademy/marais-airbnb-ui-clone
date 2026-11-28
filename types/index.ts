export interface Stay {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  imageTone: string;
}

export interface Room extends Stay {
  images: string[];
  hostName: string;
  hostYears: number;
  amenities: string[];
  minGuests: number;
  maxGuests: number;
}

export type SortOrder = "asc" | "desc";
