// src/products/application/services/product.service.ts
import { Injectable } from '@nestjs/common';
import { ProductService as DomainProductService } from 'src/modules/product/domain/services/product.service'; // Importar el servicio de dominio
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product-dtos';
import { Product } from 'src/modules/product/domain/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly domainProductService: DomainProductService) {} // Inyectar el servicio de dominio

  async createProduct(product: Product): Promise<void> {
    await this.domainProductService.createProduct(product); // Llamar al servicio de dominio
  }

  // async getAllProducts(): Promise<Product[]> {
  //   return this.domainProductService.getAllProducts(); // Llamar al servicio de dominio
  // }

  // async getProductById(id: number): Promise<Product | undefined> {
  //   return this.domainProductService.getProductById(id); // Llamar al servicio de dominio
  // }

  // async updateProduct(
  //   id: number,
  //   updateProductDto: UpdateProductDto,
  // ): Promise<void> {
  //   const product = new Product(
  //     id,
  //     updateProductDto.name,
  //     updateProductDto.description,
  //     updateProductDto.price,
  //   );
  //   await this.domainProductService.updateProduct(id, product); // Llamar al servicio de dominio
  // }

  // async deleteProduct(id: number): Promise<void> {
  //   await this.domainProductService.deleteProduct(id); // Llamar al servicio de dominio
  // }
}
