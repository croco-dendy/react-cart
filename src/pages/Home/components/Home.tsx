import React, { useEffect, useState } from 'react';
import { api } from '~/core/api';
import { tProducts } from '~/core/models';
import ProductsList from './ProductsList/ProductList';
import './Home.sass';

const Home: React.FC = () => {
  const [products, setProducts] = useState<tProducts | null>(null);

  const fetchproducts = async () => {
    const response = await api.products.get();
    setProducts(response);
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <div className="Home">
      <ProductsList products={products} />
    </div>
  );
};

export default Home;
