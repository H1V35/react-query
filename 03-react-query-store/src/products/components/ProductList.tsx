import { type Product, ProductCard, usePrefetchProduct } from '..';

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  const prefetchProduct = usePrefetchProduct();

  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 justify-center max-w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} prefetchProduct={prefetchProduct} />
      ))}
    </div>
  );
}
