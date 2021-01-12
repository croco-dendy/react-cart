import React from 'react';
import classnames from 'classnames';
import { useSetRecoilState } from 'recoil';
import { IProduct } from '~/core/models';
import { cartState } from '~/core/recoil/atoms';

interface IProps {
  data: IProduct;
}

const ProductCard: React.FC<IProps> = ({ data }) => {
  const setCartProducts = useSetRecoilState(cartState);

  const handleBuy = () => {
    setCartProducts((prevCartProducts) => [...prevCartProducts, data.title]);
  };

  return (
    <div
      className={classnames('ProductCard', {
        'not-available': !data.available,
      })}
    >
      <h3>{data.title}</h3>
      <p className="info">{data.info}</p>
      <div className="controls">
        <p className="price">
          {data.price}
          <span className="currency">$</span>
        </p>
        <button onClick={handleBuy}>buy</button>
      </div>
    </div>
  );
};

export default ProductCard;
