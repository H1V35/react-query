import { useMutation } from '@tanstack/react-query';
import { createProduct } from '../services/actions';

export function useProductMutation() {
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => console.log('Product created'),
    onSettled: () => console.log('Product settle'),
  });

  return mutation;
}
