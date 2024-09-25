import {useCartData} from '@store/cart';
import {Link} from 'react-router-dom';
import {Image} from '@chakra-ui/react';
import classes from './cart-button.module.scss';

const CartButton = () => {
  const cart = useCartData();

  return (
    <Link to="/cart">
      {cart.length > 0 && <div className={classes.counter}>{cart.length}</div>}
      <Image boxSize="40px" src="https://i.imgur.com/9KzjF8l.png" />
    </Link>
  );
};

export default CartButton;
