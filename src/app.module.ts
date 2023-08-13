import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './modules/product/infrastructure/persistence/entities/product.entity';
import { ProductsModule } from './modules/product/product.module';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
