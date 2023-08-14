import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repositories/product.repository';

@Module({
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductsDomainModule {}
