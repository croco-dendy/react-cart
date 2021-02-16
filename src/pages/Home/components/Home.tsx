import React, { useEffect, useState } from 'react';
import { api } from '~/core/api';
import { tProducts } from '~/core/models';
import Products from './Products';
import './Home.sass';

const Home: React.FC = () => {
  const [products, setProducts] = useState<tProducts | null>(null);

  const fetchProducts = async () => {
    const response = await api.products.get();
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="Home">
      <Products data={products} />
    </div>
  );
};

export default Home;
