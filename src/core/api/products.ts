import { random } from 'lodash';
import { meta } from '~/core/meta';
import { IProduct } from '~/core/models';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getProducts = async (): Promise<IProduct[]> => {
  await sleep(random(100, 400));
  return meta.products;
};

const ProductsApi = {
  get: getProducts,
};

export default ProductsApi;
