export type GalleryCategory = 'todos' | 'salao' | 'piscina' | 'banheiros' | 'entrada';

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: GalleryCategory;
  description: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  eventType: string;
  guestCount: string;
  date: string;
  period: string;
  needsPool: boolean;
  needsKitchen: boolean;
  needsFurniture: boolean;
  notes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
