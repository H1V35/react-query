import { ProductList } from "..";

export function MensPage() {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Products for men</h1>

      <ProductList />
    </div>
  );
}
