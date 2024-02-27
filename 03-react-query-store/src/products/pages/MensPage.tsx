import { ProductList } from '../components/ProductList';
import { ProductListSkeleton } from '../components/ProductListSkeleton';
import { useProducts } from '../hooks/useProducts';
import { ErrorPage } from '../../ErrorPage';

export function MensPage() {
  const { products, isLoading } = useProducts({
    filterKey: "men's clothing",
  });

  if (isLoading) return <ProductListSkeleton category="Products for men" length={4} />;

  if (!products) return <ErrorPage />;

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Products for men</h1>

      <ProductList products={products} />
    </div>
  );
}
