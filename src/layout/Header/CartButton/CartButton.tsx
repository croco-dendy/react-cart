import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartState } from '~/core/recoil/atoms';
import IconButton from '~/shared/components/IconButton';

const CartButton: React.FC = () => {
  const cartProducts = useRecoilValue(cartState);
  console.log('🚀 > cartProducts', cartProducts);
  return (
    <div className="CartButton">
      <Link to="/cart">
        {cartProducts.length > 0 && (
          <div className="CartCounter">{cartProducts.length}</div>
        )}
        <IconButton icon="https://i.imgur.com/9KzjF8l.png" />
      </Link>
    </div>
  );
};

export default CartButton;
