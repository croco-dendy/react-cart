import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '~/shared/components/IconButton';

const CartButton: React.FC = () => {
  return (
    <div className="CartButton">
      <Link to="/cart">
        <IconButton icon="https://i.imgur.com/UaP0cqh.png" />
      </Link>
    </div>
  );
};

export default CartButton;
