import {api} from '@api';
import {Products} from '@models';
import {useQuery} from '@tanstack/react-query';

export const useProducts = () => {
  return useQuery<Products>({
    queryKey: ['products'],
    queryFn: () => api.products.get(),
  });
};
