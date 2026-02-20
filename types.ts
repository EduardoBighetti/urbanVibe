
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  isNew: boolean;
  isPromo: boolean;
  colors: string[];
  sizes: string[];
  keywords: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  isPromo: boolean;
}
