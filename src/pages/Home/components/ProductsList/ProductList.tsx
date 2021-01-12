import React from 'react';
import { map } from 'lodash';
import { tProducts } from '~/core/models';
import ProductCard from './ProductCard';
import './ProductsList.sass';

interface IProps {
  products: tProducts | null;
}

const ProductsList: React.FC<IProps> = ({ products }) => {
  return (
    <div className="ProductsList">
      {map(products, (product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
};

export default ProductsList;
