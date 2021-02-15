import React from 'react';
import IconButton from '~/shared/components/IconButton';
import removeIcon from './assets/remove.svg';
import increaseIcon from './assets/increase.svg';
import decreaseIcon from './assets/decrease.svg';

interface IProps {
  id: number;
  count: number;
  onRemove: (id: number) => void;
  onIncrease?: (id: number) => void;
  onDecrease?: (id: number) => void;
}

const CartItemControls: React.FC<IProps> = ({
  id,
  count,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  const handleRemove = () => onRemove(id);
  const handleIncrease = () => onIncrease && onIncrease(id);
  const handleDecrease = () => onDecrease && onDecrease(id);

  return (
    <div className="CartItemControls">
      <IconButton
        onClick={handleIncrease}
        className="CartIncreaseIcon"
        icon={increaseIcon}
      />
      <p>{count}</p>
      <IconButton
        onClick={handleDecrease}
        className="CartDecreaseIcon"
        icon={decreaseIcon}
      />
      <IconButton
        onClick={handleRemove}
        className="CartRemoveIcon"
        icon={removeIcon}
      />
    </div>
  );
};

export default CartItemControls;
