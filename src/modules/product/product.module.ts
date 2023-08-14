import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/persistence/entities/product.entity';
import { ProductsApplicationModule } from './application/product.application.module';
import { ProductsInterfaceModule } from './interfaces/product.interface.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // o el tipo de base de datos que estés utilizando
      host: 'armotek-db-armotek-ecommerce-db.aivencloud.com',
      port: 19653,
      username: 'avnadmin',
      password: 'AVNS_98wDYMtwz55mZx08JDq',
      database: 'armotekdb',
      entities: [ProductEntity],
      synchronize: true,
    }),
    ProductsApplicationModule,
    ProductsInterfaceModule,
  ],
  providers: [],
  controllers: [],
})
export class ProductsModule {}
