export * from './cart';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  info: string;
  available: boolean;
}

export type tProducts = IProduct[];
