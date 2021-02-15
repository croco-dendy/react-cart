import React, { useState } from 'react';
import { find, map } from 'lodash';
import { IProduct, tProducts } from '~/core/models';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import './ProductsList.sass';

interface IProps {
  products: tProducts | null;
}

const ProductsList: React.FC<IProps> = ({ products }) => {
  const [productOpened, setProductOpened] = useState<IProduct | null>(null);

  const handleOpenProduct = (productId: number) => {
    if (products)
      setProductOpened(
        find(products, (product) => product.id === productId) || null
      );
  };

  const handleCloseProduct = () => {
    setProductOpened(null);
  };

  return (
    <div className="ProductsList">
      {map(products, (product) => (
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
