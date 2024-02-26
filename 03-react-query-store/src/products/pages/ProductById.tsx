import { useParams } from "react-router-dom";
import { ProductCard, ProductCardSkeleton, useProduct } from "..";
import { ErrorPage } from "../../ErrorPage";
import { ScrollToTop } from "../../shared/components/ScrollToTop";

export function ProductById() {
  const { id } = useParams();
  const { product, isLoading } = useProduct({ id: +id! });

  if (isLoading) return <ProductCardSkeleton />;

  if (!product) return <ErrorPage />;

  return (
    <div className="w-full flex-col">
      <ScrollToTop />

      <h1 className="text-2xl font-bold text-center mb-4">Product</h1>

      <ProductCard product={product} fullDescription />
    </div>
  );
}
