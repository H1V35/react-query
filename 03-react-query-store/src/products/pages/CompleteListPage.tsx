import { ProductList, ProductListSkeleton, useProducts } from '..';
import { ErrorPage } from '../../ErrorPage';

export function CompleteListPage() {
  const { products, isLoading } = useProducts({});

  if (isLoading) return <ProductListSkeleton category="All products" length={20} />;

  if (!products) return <ErrorPage />;

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">All products</h1>

      <ProductList products={products} />
    </div>
  );
}
