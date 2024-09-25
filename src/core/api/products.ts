import {faker} from '@faker-js/faker';
import {Products} from 'core/models';

const makeProduct = () => ({
  id: faker.number.int(),
  title: faker.vehicle.vehicle(),
  price: faker.number.int({min: 5000, max: 100000}),
  info:
    faker.vehicle.vin() +
    ', ' +
    faker.vehicle.fuel() +
    ', ' +
    faker.vehicle.color(),
  available: true,
});

const getProducts = async (): Promise<Products> => {
  return new Array(12).fill(0).map(() => makeProduct());
};

const productsApi = {
  get: getProducts,
};

export default productsApi;
