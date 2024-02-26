import { queryClient } from "../../lib/tanstack-query";
import { productActions } from "..";

export function usePrefetchProduct() {
  const prefetchProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["product", id],
      queryFn: () => productActions.getProductById(id),
    });
  };

  return prefetchProduct;
}
