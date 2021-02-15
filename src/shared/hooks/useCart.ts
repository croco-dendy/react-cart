import { useRecoilState } from 'recoil';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';
import remove from 'lodash/remove';
import { IProduct, tCart } from '~/core/models';
import { cartList } from '~/core/recoil/atoms';

interface IUseCart {
  includes: (id: number | undefined) => boolean;
  add: (product: IProduct) => void;
  removeItem: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

export default function useCart(): IUseCart {
  const [cartProducts, setCartProducts] = useRecoilState(cartList);

  const increaseCount = (index: number) => {
    const newCart: tCart = cloneDeep(cartProducts);
    const itemIndex = findIndex(
      cartProducts,
      (item) => item.product.id === index
    );
    newCart[itemIndex].count += 1;
    setCartProducts(newCart);
  };

  const decreaseCount = (index: number) => {
    const newCart: tCart = cloneDeep(cartProducts);
    const itemIndex = findIndex(
      cartProducts,
      (item) => item.product.id === index
    );
    if (newCart[itemIndex].count > 1) {
      newCart[itemIndex].count -= 1;
      setCartProducts(newCart);
      return;
    }
    removeItem(index);
  };

  const addNew = (product: IProduct) => {
    const newCart: tCart = cloneDeep(cartProducts);
    newCart.push({
      product,
      count: 1,
    });
    setCartProducts(newCart);
  };

  const includes = (id: number | undefined): boolean => {
    return findIndex(cartProducts, (item) => item.product.id === id) >= 0;
  };

  const add = (product: IProduct) => {
    if (!product.available) return;
    if (includes(product.id)) increaseCount(product.id);
    else addNew(product);
  };

  const removeItem = (id: number) => {
    const newCart: tCart = cloneDeep(cartProducts);
    remove(newCart, (item) => item.product.id === id);
    setCartProducts(newCart);
  };

  return {
    includes,
    add,
    removeItem,
    increase: increaseCount,
    decrease: decreaseCount,
  };
}
