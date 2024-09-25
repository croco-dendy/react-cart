import {useState} from 'react';
import {Product, Products} from '@models';
import {ProductCard} from '../product-card';
import {ProductModal} from '../product-modal';
import classes from './product-list.module.scss';

interface Props {
  data: Products;
}

const ProductsList = ({data}: Props) => {
  const [productOpened, setProductOpened] = useState<Product | null>(null);

  const handleOpenProduct = (productId: number) => {
    if (!data) return;
    setProductOpened(data.find(product => product.id === productId) || null);
  };

  const handleCloseProduct = () => {
    setProductOpened(null);
  };

  return (
    <div className={classes.list}>
      {data.map(product => (
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
