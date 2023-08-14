import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductsDomainModule } from '../domain/product.domain.module';

@Module({
  imports: [ProductsDomainModule],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductsApplicationModule {}
