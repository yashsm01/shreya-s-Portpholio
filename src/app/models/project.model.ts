export interface Project {
  id: string;
  title_en: string;
  title_fr: string;
  category: string;
  categoryLabel_en: string;
  categoryLabel_fr: string;
  description_en: string;
  description_fr: string;
  shortDescription_en?: string;
  shortDescription_fr?: string;
  coverImage: string;
  images: string[];
  location_en?: string;
  location_fr?: string;
  year?: number | string;
  area?: string;
  client?: string;
  featured?: boolean;
}
