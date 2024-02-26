import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

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
    queryFn: () => productActions.getProducts({ filterKey }),
  });

  return { products, error, isError, isFetching, isLoading };
}
