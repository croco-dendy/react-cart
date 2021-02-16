import React, { useState } from 'react';
import { find, map } from 'lodash';
import { IProduct, tProducts } from '~/core/models';
import ProductCard from '../Card';
import ProductModal from '../Modal';
import './ProductsList.sass';

interface IProps {
  data: tProducts | null;
}

const ProductsList: React.FC<IProps> = ({ data }) => {
  const [productOpened, setProductOpened] = useState<IProduct | null>(null);

  const handleOpenProduct = (productId: number) => {
    if (data)
      setProductOpened(
        find(data, (product) => product.id === productId) || null
      );
  };

  const handleCloseProduct = () => {
    setProductOpened(null);
  };

  return (
    <div className="ProductsList">
      {map(data, (product) => (
        <ProductCard
          product={product}
          key={product.title}
          onOpenProduct={handleOpenProduct}
        />
      ))}
      <ProductModal product={productOpened} onClose={handleCloseProduct} />
    </div>
  );
};

export default ProductsList;
