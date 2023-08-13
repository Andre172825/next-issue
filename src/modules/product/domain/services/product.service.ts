import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../../application/dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(product: Product): Promise<void> {
    await this.productRepository.create(product);
  }

  // async getAllProducts(): Promise<Product[]> {
  //   return this.productRepository.findAll();
  // }

  // async getProductById(id: number): Promise<Product | undefined> {
  //   return this.productRepository.findById(id);
  // }

  // async updateProduct(id: number, product: Product): Promise<void> {
  //   await this.productRepository.update(id, product);
  // }

  // async deleteProduct(id: number): Promise<void> {
  //   await this.productRepository.delete(id);
  // }
}
