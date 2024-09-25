import React from 'react';
import {Product} from '@models';
import useCart from '@hooks/useCart';
import clsx from 'clsx';
import classes from './product-card.module.scss';
import {Heading, Text} from '@chakra-ui/react';

interface Props {
  product: Product;
  onOpenProduct: (id: number) => void;
}

const ProductCard = ({product, onOpenProduct}: Props) => {
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
      className={clsx(classes.product_card, {
        [classes.not_available]: !product.available,
      })}
    >
      <Heading className={classes.title} size="sm">
        {product.title}
      </Heading>
      <Text className={classes.info}>{product.info}</Text>
      <div className={classes.controls}>
        <p className={classes.price}>
          {product.price}
          <span className={classes.currency}>$</span>
        </p>
        <button
          className={classes.buy_button}
          disabled={disabled}
          onClick={handleBuy}
        >
          {cart.includes(product?.id) ? 'in cart' : 'buy'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
