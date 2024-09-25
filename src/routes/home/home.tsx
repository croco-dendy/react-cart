import {ProductsList} from '@components/products-list';
import {useProducts} from '@queries/useProducts';
import classes from './Home.module.scss';

const Home = () => {
  const {data} = useProducts();

  if (!data) return null;
  return (
    <div className={classes.home}>
      <ProductsList data={data} />
    </div>
  );
};

export default Home;
