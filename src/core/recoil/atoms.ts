import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { tCart } from '~/core/models';

const { persistAtom } = recoilPersist();

export const cartList = atom<tCart>({
  key: 'cartList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
