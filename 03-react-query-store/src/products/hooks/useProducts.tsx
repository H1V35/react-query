import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/actions';

interface Options {
  filterKey?: string;
}

export function useProducts({ filterKey }: Options) {
  const {
    data: products = [],
    error,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => getProducts({ filterKey }),
  });

  return { products, error, isError, isFetching, isLoading };
}
