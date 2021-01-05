import { meta } from '~/core/meta';
import { IProduct } from '~/core/models';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getProducts = async (): Promise<IProduct[]> => {
  await sleep(2000);
  return meta.products;
};

const ProductsApi = {
  get: getProducts,
};

export default ProductsApi;
