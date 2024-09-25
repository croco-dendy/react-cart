export interface Product {
  id: number;
  title: string;
  price: number;
  info: string;
  available: boolean;
}

export type Products = Product[];

export interface CartItem {
  product: Product;
  count: number;
}

export type Cart = CartItem[];
