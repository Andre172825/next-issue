import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from '../../application/services/product.service';
import { CreateProductDto } from '../../../../shared/dtos/create-product.dto';
import { Product } from '../../domain/entities/product.entity';
import { UtilFn } from '../../../../shared/utils/get-random-int';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilFn: UtilFn,
  ) {}

  @Post()
  async create(@Body() productDto: CreateProductDto) {
    const product = new Product(
      this.utilFn.getRandomInt(1, 1000),
      productDto.name,
      productDto.description,
      productDto.price,
    );
    await this.productService.createProduct(product);
  }
}
