import { ProductList, ProductListSkeleton, useProducts } from '..';
import { ErrorPage } from '../../ErrorPage';

export function WomensPage() {
  const { products, isLoading } = useProducts({
    filterKey: "women's clothing",
  });

  if (isLoading) return <ProductListSkeleton category="Products for women" length={6} />;

  if (!products) return <ErrorPage />;

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Products for women</h1>

      <ProductList products={products} />
    </div>
  );
}
