import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/modules/product/domain/repositories/product.repository';
import { Product } from 'src/modules/product/domain/entities/product.entity';
import { CreateProductDto } from '../../application/dtos/create-product.dto';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(product: Product): Promise<void> {
    const _product = new ProductEntity();
    _product.name = product.name;
    _product.description = product.description;
    _product.price = product.price;
    this.productRepository.save(_product);
  }

  // async findAll(): Promise<Product[]> {
  //   return this.products;
  // }

  // async findById(id: number): Promise<Product | undefined> {
  //   return this.products.find((product) => product.id === id);
  // }

  // async update(id: number, product: Product): Promise<void> {
  //   const index = this.products.findIndex(
  //     (existingProduct) => existingProduct.id === id,
  //   );
  //   if (index !== -1) {
  //     this.products[index] = product;
  //   }
  // }

  // async delete(id: number): Promise<void> {
  //   const index = this.products.findIndex((product) => product.id === id);
  //   if (index !== -1) {
  //     this.products.splice(index, 1);
  //   }
  // }
}
