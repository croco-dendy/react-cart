import { faker } from '@faker-js/faker';
import { IProduct } from '~/core/models';

const makeProduct = () => ({
  id: faker.datatype.number(),
  title: faker.vehicle.vehicle(),
  price: faker.datatype.number({ min: 5000, max: 100000, precision: 1000 }),
  info:
    faker.vehicle.vin() +
    ', ' +
    faker.vehicle.fuel() +
    ', ' +
    faker.vehicle.color(),
  available: true,
});

const products: IProduct[] = new Array(12).fill(0).map(() => makeProduct());

export default products;
