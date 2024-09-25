import React from 'react';
import useCartActions from '@hooks/useCart';
import {CartItem} from '@components/cart-item';
import classes from './cart.module.scss';
import {Heading} from '@chakra-ui/react';

const Cart: React.FC = () => {
  const cart = useCartActions();

  return (
    <div className={classes.cart}>
      <Heading size="md">
        {cart.data.length ? 'Your cart:' : 'Cart is empty...'}
      </Heading>
      <div className={classes.list}>
        {cart.data.map(cartItem => (
          <CartItem
            product={cartItem.product}
            key={cartItem.product.id}
            count={cartItem.count}
            onRemove={cart.removeItem}
            onIncrease={cart.increase}
            onDecrease={cart.decrease}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
