import { api } from '.';
import type { Product } from '../types/product';

export class ProductsApi {
  static async get(): Promise<Product[]> {
    return await api.get<Product[]>('/products');
  }
}
