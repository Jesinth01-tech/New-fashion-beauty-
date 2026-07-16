export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  details: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  avatarSeed: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  details: string[];
}
