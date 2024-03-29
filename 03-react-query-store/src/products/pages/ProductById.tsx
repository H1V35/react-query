import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/ProductCardSkeleton';
import { useProduct } from '../hooks/useProduct';
import { ErrorPage } from '../../ErrorPage';

export function ProductById() {
  const { id } = useParams();
  const { product, isLoading } = useProduct({ id: +id! });

  if (isLoading) return <ProductCardSkeleton />;

  if (!product) return <ErrorPage />;

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold text-center mb-4">Product</h1>

      <ProductCard product={product} fullDescription />
    </div>
  );
}
