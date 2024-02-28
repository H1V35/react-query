import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../lib/tanstack-query';
import { createProduct, getProducts } from '../services/actions';
import { Product } from '../interfaces/products';

export function useProductMutation() {
  const mutation = useMutation({
    mutationFn: createProduct,

    onMutate: (product) => {
      // Optimistic Product
      const optimisticProduct = { id: Math.random(), ...product };

      // Store product in query client cache
      queryClient.setQueryData<Product[]>(['products', { filterKey: product.category }], (old) => {
        if (!old) {
          queryClient.fetchQuery({
            queryKey: ['products', { filterKey: product.category }],
            queryFn: async () => {
              const oldProducts = await getProducts({ filterKey: product.category });

              return [...oldProducts, optimisticProduct];
            },
          });
        }

        return old && [...old, optimisticProduct];
      });

      return { optimisticProduct };
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

    onError: (error, variables, context) => {
      queryClient.removeQueries({ queryKey: ['product', context?.optimisticProduct.id] });

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: variables.category }],
        (old) => {
          if (!old) return [];

          return old.filter((cacheProduct) => cacheProduct.id !== context?.optimisticProduct.id);
        }
      );

      alert(error);
      console.log(error);
    },
  });

  return mutation;
}
