import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../../modules/product/domain/repositories/product.repository';
import { Product } from '../../../../modules/product/domain/entities/product.entity';
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
}
