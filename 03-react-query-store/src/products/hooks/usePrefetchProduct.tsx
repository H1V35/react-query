import { queryClient } from '../../lib/tanstack-query';
import { getProductById } from '../services/actions';

export function usePrefetchProduct() {
  const prefetchProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['product', id],
      queryFn: () => getProductById(id),
    });
  };

  return prefetchProduct;
}
