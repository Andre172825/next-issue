// src/modules/product/infrastructure/persistence/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('products2') // Nombre de la tabla en la base de datos
export class ProductEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 }) // Utilizar decimal para manejar precios con decimales
  price: number;
}
