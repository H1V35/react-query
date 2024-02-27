import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../lib/tanstack-query';
import { createProduct } from '../services/actions';
import { Product } from '../interfaces/products';

export function useProductMutation() {
  const mutation = useMutation({
    mutationFn: createProduct,

    onMutate: (product) => {
      console.log('Mutando - Optimistic update');

      // Optimistic Product
      const optimisticProduct = { id: Math.random(), ...product };

      // Store product in query client cache
      queryClient.setQueryData<Product[]>(['products', { filterKey: product.category }], (old) => {
        if (!old) return [optimisticProduct];
        return [...old, optimisticProduct];
      });
    },

    onSuccess: (product) => {
      // queryClient.invalidateQueries({ queryKey: ['products', { filterKey: product.category }] });

      queryClient.setQueryData<Product[]>(['products', { filterKey: product.category }], (old) => {
        if (!old) return [product];
        return [...old, product];
      });
    },
  });

  return mutation;
}
