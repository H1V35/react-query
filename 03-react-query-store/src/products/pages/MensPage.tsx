import { ProductList, useProducts } from "..";

export function MensPage() {
  const { products, isLoading } = useProducts({
    filterKey: "men's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Products for men</h1>

      {isLoading && <p>Loading...</p>}

      <ProductList products={products} />
    </div>
  );
}
