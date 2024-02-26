import { useParams } from "react-router-dom";
import { ProductCard, useProduct } from "..";
import React from "react";

export function ProductById() {
  const { id } = useParams();
  const { product, isLoading } = useProduct({ id: +id! });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Product</h1>

      {isLoading && <p>Loading...</p>}

      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
}