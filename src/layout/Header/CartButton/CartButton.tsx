import React from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { cartList } from '~/core/recoil/atoms';
import IconButton from '~/shared/components/IconButton';

const CartButton: React.FC = () => {
  const cartProducts = useRecoilValue(cartList);

  return (
    <div className="CartButton">
      {cartProducts.length > 0 && (
        <div className="CartCounter">{cartProducts.length}</div>
      )}
      <Link to="/cart">
        <IconButton icon="https://i.imgur.com/9KzjF8l.png" />
      </Link>
    </div>
  );
};

export default CartButton;
