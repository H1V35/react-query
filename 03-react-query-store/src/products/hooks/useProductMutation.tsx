import { useMutation } from '@tanstack/react-query';
import { createProduct } from '../services/actions';
import { queryClient } from '../../lib/tanstack-query';

export function useProductMutation() {
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['products', { filterKey: data.category }] });
    },
  });

  return mutation;
}
