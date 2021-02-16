import React from 'react';
import classnames from 'classnames';
import { IProduct } from '~/core/models';
import Modal from '~/shared/components/Modal';
import './ProductModal.sass';
import useCart from '~/shared/hooks/useCart';

interface IProps {
  product: IProduct | null;
  onClose: () => void;
}

const ProductModal: React.FC<IProps> = ({ product, onClose }) => {
  const cart = useCart();
  const isInCart = cart.includes(product?.id);

  const handleBuy = () => {
    if (product && product.available) cart.add(product);
  };

  if (!product) return null;
  return (
    <Modal
      className={classnames('ProductModal', {
        'not-available': !product.available,
      })}
      show={!!product}
      onClose={onClose}
    >
      <div className="ProductModalBody">
        <h3>{product.title}</h3>
        <p className="info">{product.info}</p>
        <div className="controls">
          <p className="price">
            {product.price}
            <span className="currency">$</span>
          </p>
          <button disabled={isInCart} onClick={handleBuy}>
            {isInCart ? 'in cart' : 'buy'}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
