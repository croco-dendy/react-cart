import {Heading, Modal, ModalContent, ModalOverlay} from '@chakra-ui/react';
import {Product} from '@models';
import useCart from '@hooks/useCart';
import classes from './product-modal.module.scss';
import clsx from 'clsx';

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({product, onClose}: Props) => {
  const cart = useCart();
  const isInCart = cart.includes(product?.id);

  const handleBuy = () => {
    if (product && product.available) cart.add(product);
  };

  return (
    <Modal isOpen={!!product} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        className={clsx(classes.modal, {
          [classes.not_available]: !product?.available,
        })}
      >
        <div className={classes.body}>
          <Heading size="md" mb={4} mt={4}>
            {product?.title}
          </Heading>
          <p className={classes.info}>{product?.info}</p>
          <div className={classes.controls}>
            <p className={classes.price}>
              {product?.price}
              <span className={classes.currency}>$</span>
            </p>
            <button
              className={classes.buy}
              disabled={isInCart}
              onClick={handleBuy}
            >
              {isInCart ? 'in cart' : 'buy'}
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
