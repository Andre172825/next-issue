// src/products/application/services/product.service.ts
import { Injectable } from '@nestjs/common';
import { ProductService as DomainProductService } from '../../domain/services/product.service'; // Importar el servicio de dominio
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly domainProductService: DomainProductService) {} // Inyectar el servicio de dominio

  async createProduct(product: Product): Promise<void> {
    await this.domainProductService.createProduct(product);
  }
}
