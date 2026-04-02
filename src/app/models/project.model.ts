export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  shortDescription?: string;
  coverImage: string;
  images: string[];
  location?: string;
  year?: number;
  area?: string;
  client?: string;
  featured?: boolean;
}
