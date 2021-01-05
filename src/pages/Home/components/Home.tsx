import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { api } from '~/core/api';
import { IProduct, tProducts } from '~/core/models';
import './Home.sass';

const Home: React.FC = () => {
  const [data, setData] = useState<tProducts | null>(null);
  console.log('RENDER');
  console.log('🚀 > data', data);

  const fetchData = async () => {
    const response = await api.products.get();
    setData(response);
  };

  useEffect(() => {
    fetchData();
    return () => console.log('umnounted');
  }, []);

  return (
    <div className="Home">
      {map(data, (product) => (
        <div>{product.title}</div>
      ))}
    </div>
  );
};

export default Home;
