import {IconButton, Text} from '@chakra-ui/react';
import classes from './cart-item.module.scss';
import {AddIcon, DeleteIcon, MinusIcon} from '@chakra-ui/icons';
import {Product} from '@models';

interface Props {
  product: Product;
  count: number;
  onRemove: (id: number) => void;
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
}

const CartItem = ({
  product,
  count,
  onRemove,
  onIncrease,
  onDecrease,
}: Props) => {
  const handleRemove = () => onRemove(product.id);
  const handleIncrease = () => onIncrease && onIncrease(product.id);
  const handleDecrease = () => onDecrease && onDecrease(product.id);

  return (
    <div className={classes.item}>
      <Text>{product.title}</Text>
      <div className={classes.controls}>
        <IconButton
          isRound
          bgColor={'transparent'}
          size="sm"
          onClick={handleIncrease}
          className={classes.increase_icon}
          aria-label="CartIncreaseIcon"
          icon={<AddIcon />}
        />
        <p>{count}</p>
        <IconButton
          isRound
          bgColor={'transparent'}
          size="sm"
          onClick={handleDecrease}
          className={classes.decrease_icon}
          aria-label="CartDecreaseIcon"
          icon={<MinusIcon />}
        />
        <IconButton
          size="sm"
          colorScheme="red"
          onClick={handleRemove}
          className={classes.remove_icon}
          aria-label="CartRemoveIcon"
          icon={<DeleteIcon />}
        />
      </div>
    </div>
  );
};

export default CartItem;
