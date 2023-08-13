import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductService } from 'src/modules/product/application/services/product.service';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product-dtos';
import { Product } from '../../domain/entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  getRandomInt(min: number, max: number): number {
    // Asegúrate de que min sea menor que max
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }

    // Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    const randomDecimal = Math.random();

    // Calcula un número entero en el rango deseado (min - max)
    const randomInt = Math.floor(randomDecimal * (max - min + 1)) + min;

    return randomInt;
  }
  @Post()
  async create(@Body() productDto: CreateProductDto) {
    const product = new Product(
      this.getRandomInt(1, 1000),
      productDto.name,
      productDto.description,
      productDto.price,
    );
    await this.productService.createProduct(product);
  }

  // @Get()
  // async findAll(): Promise<Product[]> {
  //   return this.productService.getAllProducts();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<Product | undefined> {
  //   return this.productService.getProductById(id);
  // }

  // @Put(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() updateProductDto: UpdateProductDto,
  // ) {
  //   const product = new Product();
  //   product.name = updateProductDto.name;
  //   product.description = updateProductDto.description;
  //   product.price = updateProductDto.price;
  //   await this.productService.updateProduct(id, product);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: number) {
  //   await this.productService.deleteProduct(id);
  // }
}
