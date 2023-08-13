import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';

@Module({
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductsDomainModule {}
