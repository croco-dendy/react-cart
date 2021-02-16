import React from 'react';
import classnames from 'classnames';
import { IProduct } from '~/core/models';
import useCart from '~/shared/hooks/useCart';
import './Card.scss';

interface IProps {
  product: IProduct;
  onOpenProduct: (id: number) => void;
}

const ProductCard: React.FC<IProps> = ({ product, onOpenProduct }) => {
  const cart = useCart();
  const disabled = !product.available || cart.includes(product?.id);

  const handleBuy = (e: React.MouseEvent) => {
    if (!disabled) e.stopPropagation();
    if (product.available) cart.add(product);
  };

  const handleCardClick = () => {
    onOpenProduct(product.id);
  };

  return (
    <div
      role="presentation"
      onClick={handleCardClick}
      className={classnames('product-card', {
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
        <button disabled={disabled} onClick={handleBuy}>
          {cart.includes(product?.id) ? 'in cart' : 'buy'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
