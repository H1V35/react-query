import { sleep } from '../../utils/sleep';
import type { Product } from '../interfaces/products';
import { productsApi } from '../api/productsApi';

interface GetProductsOptions {
  filterKey?: string;
}

export const getProductById = async (id: number): Promise<Product> => {
  await sleep(2);

  const { data } = await productsApi.get<Product>(`/products/${id}`);
  return data;
};

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<Product[]> => {
  await sleep(2);

  const filterUrl = filterKey ? `category=${filterKey}` : '';

  const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);
  return data;
};
