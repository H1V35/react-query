import { ProductList } from "..";

export function MensPage() {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      <ProductList />
    </div>
  );
}