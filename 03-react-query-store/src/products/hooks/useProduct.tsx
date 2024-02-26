import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

interface Options {
  id: number;
}

export function useProduct({ id }: Options) {
  const {
    data: product,
    error,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productActions.getProductById(id),
  });

  return { product, error, isError, isFetching, isLoading };
}
