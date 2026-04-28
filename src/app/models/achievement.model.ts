export interface Achievement {
  id: string;
  category: string;
  title_en: string;
  title_fr: string;
  year: number;
  organization?: string;
  description_en?: string;
  description_fr?: string;
  link?: string;
}
