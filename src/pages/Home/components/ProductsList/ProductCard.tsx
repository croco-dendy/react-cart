import React from 'react';
import { IProduct } from '~/core/models';

interface IProps {
  data: IProduct;
}

const ProductCard: React.FC<IProps> = ({ data }) => {
  return (
    <div className="ProductCard">
      <h4>{data.title}</h4>
      <p className="info">{data.info}</p>
      <p className="price">{data.price}</p>
    </div>
  );
};

export default ProductCard;
