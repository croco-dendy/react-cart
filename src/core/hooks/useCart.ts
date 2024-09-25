import {Cart, Product} from '@models';
import {useCartData, useCartDataActions} from '@store/cart';

interface UseCart {
  data: Cart;
  includes: (id: number | undefined) => boolean;
  add: (product: Product) => void;
  removeItem: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

const useCart = (): UseCart => {
  const data = useCartData();
  const actions = useCartDataActions();

  const increaseCount = (index: number) => {
    const newCart: Cart = structuredClone(data);
    const itemIndex = data.findIndex(item => item.product.id === index);
    newCart[itemIndex].count += 1;
    actions.set(newCart);
  };

  const decreaseCount = (index: number) => {
    const newCart: Cart = structuredClone(data);
    const itemIndex = data.findIndex(item => item.product.id === index);

    if (newCart[itemIndex].count > 1) {
      newCart[itemIndex].count -= 1;
      actions.set(newCart);
      return;
    }

    removeItem(index);
  };

  const addNew = (product: Product) => {
    const newCart: Cart = structuredClone(data);
    newCart.push({
      product,
      count: 1,
    });
    actions.set(newCart);
  };

  const includes = (id: number | undefined): boolean => {
    return data.findIndex(item => item.product.id === id) >= 0;
  };

  const add = (product: Product) => {
    if (!product.available) return;
    if (includes(product.id)) increaseCount(product.id);
    else addNew(product);
  };

  const removeItem = (id: number) => {
    const newCart: Cart = structuredClone(data);
    actions.set(newCart.filter(item => item.product.id !== id));
  };

  return {
    data,
    includes,
    add,
    removeItem,
    increase: increaseCount,
    decrease: decreaseCount,
  };
};

export default useCart;
