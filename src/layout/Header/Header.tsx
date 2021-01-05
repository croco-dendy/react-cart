import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '~/layout/Header/CartButton/CartButton';

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <h2>React Boil</h2>
      </Link>
      <CartButton />
    </header>
  );
};

export default Header;
