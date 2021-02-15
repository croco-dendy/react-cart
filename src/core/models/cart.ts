import { IProduct } from '~/core/models';

export interface ICartItem {
  product: IProduct;
  count: number;
}

export type tCart = ICartItem[];
