import {Cart} from '@models';
import {create} from 'zustand';

interface CartStore {
  data: Cart;
  actions: {
    set: (cart: Cart) => void;
  };
}

const useCartStore = create<CartStore>(set => ({
  data: [],
  actions: {
    set: cart => set({data: cart}),
  },
}));

export const useCartData = () => useCartStore(state => state.data);
export const useCartDataActions = () => useCartStore(state => state.actions);
