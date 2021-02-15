import React from 'react';
import { useRecoilState } from 'recoil';
import { cartList } from '~/core/recoil/atoms';
import CartItemControls from '~/pages/Cart/components/CartItemControls';
import useCart from '~/shared/hooks/useCart';
import './Cart.sass';

const Cart: React.FC = () => {
  const cart = useCart();
  const [cartItems] = useRecoilState(cartList);

  const handleRemove = (index: number) => {
    cart.removeItem(index);
  };
  const handleIncrease = (index: number) => {
    console.log('increase');
    cart.increase(index);
  };
  const handleDecrease = (index: number) => {
    cart.decrease(index);
  };

  return (
    <div className="Cart">
      <h3>{cartItems.length ? 'Your cart:' : 'Cart is empty...'}</h3>
      <div className="CartItemsList">
        {cartItems.map((cartItem) => (
          <div className="CartItem" key={cartItem.product.id}>
            <p>{cartItem.product.title}</p>
            <CartItemControls
              id={cartItem.product.id}
              count={cartItem.count}
              onRemove={handleRemove}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
