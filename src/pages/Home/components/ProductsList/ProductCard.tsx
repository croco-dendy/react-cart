import React from 'react';
import classnames from 'classnames';
import { IProduct } from '~/core/models';
import useCart from '~/shared/hooks/useCart';

interface IProps {
  product: IProduct;
  onOpenProduct: (id: number) => void;
}

const ProductCard: React.FC<IProps> = ({ product, onOpenProduct }) => {
  const cart = useCart();
  const isInCart = cart.includes(product?.id);

  const handleBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.available) cart.add(product);
  };

  const handleCardClick = () => {
    onOpenProduct(product.id);
  };

  return (
    <div
      role="presentation"
      onClick={handleCardClick}
      className={classnames('ProductCard', {
        'not-available': !product.available,
      })}
    >
      <h3>{product.title}</h3>
      <p className="info">{product.info}</p>
      <div className="controls">
        <p className="price">
          {product.price}
          <span className="currency">$</span>
        </p>
        <button disabled={!product.available || isInCart} onClick={handleBuy}>
          {isInCart ? 'in cart' : 'buy'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
