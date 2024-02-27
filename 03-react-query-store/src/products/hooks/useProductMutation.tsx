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

      return {
        optimisticProduct,
      };
    },

    onSuccess: (product, _variables, context) => {
      // Query invalidation:
      //    queryClient.invalidateQueries({ queryKey: ['products', { filterKey: product.category }] });

      queryClient.removeQueries({ queryKey: ['product', context?.optimisticProduct.id] });

      queryClient.setQueryData<Product[]>(['products', { filterKey: product.category }], (old) => {
        if (!old) return [product];

        return old.map((cacheProduct) =>
          cacheProduct.id === context?.optimisticProduct.id ? product : cacheProduct
        );
      });
    },
  });

  return mutation;
}
