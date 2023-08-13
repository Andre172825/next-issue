import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './modules/product/application/dtos/create-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('products') // Ajusta la ruta según tus necesidades
  async createProduct(@Body() productDto: CreateProductDto) {
    // Tu lógica de creación de productos aquí...
  }
}
