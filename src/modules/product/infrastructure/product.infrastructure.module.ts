import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './persistence/entities/product.entity';
import { ProductRepositoryImpl } from './persistence/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductRepositoryImpl],
  exports: [ProductRepositoryImpl],
})
export class ProductsInfrastructureModule {}
