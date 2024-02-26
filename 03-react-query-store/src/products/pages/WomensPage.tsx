import { ProductList } from "..";

export function WomensPage() {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Products for women</h1>

      <ProductList />
    </div>
  );
}
