import { meta } from '~/core/meta';
import { IProduct } from '~/core/models';

const getProducts = async (): Promise<IProduct[]> => {
  return meta.products;
};

const ProductsApi = {
  get: getProducts,
};

export default ProductsApi;
