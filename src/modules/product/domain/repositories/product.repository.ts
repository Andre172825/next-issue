import { Product } from '../entities/product.entity';

export interface ProductRepository {
  create(product: Product): Promise<void>;
  //   findAll(): Promise<Product[]>;
  //   findById(id: number): Promise<Product | undefined>;
  //   update(id: number, product: Product): Promise<void>;
  //   delete(id: number): Promise<void>;
}
