import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsApplicationModule } from './application/product.application.module';
import { ProductsDomainModule } from './domain/product.domain.module';
import { ProductsInfrastructureModule } from './infrastructure/product.infrastructure.module';
import { ProductsInterfaceModule } from './interfaces/product.interface.module';
import { ProductEntity } from './infrastructure/persistence/entities/product.entity';
import { ProductService } from './application/services/product.service';
import { ProductController } from './interfaces/controllers/product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // o el tipo de base de datos que estés utilizando
      host: 'armotek-db-armotek-ecommerce-db.aivencloud.com',
      port: 19653,
      username: 'avnadmin',
      password: 'AVNS_98wDYMtwz55mZx08JDq',
      database: 'armotekdb',
      entities: [
        ProductEntity,
        /* ... */
      ],
      synchronize: true,
    }),

    ProductsApplicationModule,
    ProductsDomainModule,
    ProductsInfrastructureModule,
    ProductsInterfaceModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductsModule {}
