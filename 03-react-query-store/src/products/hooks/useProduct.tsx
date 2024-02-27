import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../services/actions';

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
    queryFn: () => getProductById(id),
  });

  return { product, error, isError, isFetching, isLoading };
}
