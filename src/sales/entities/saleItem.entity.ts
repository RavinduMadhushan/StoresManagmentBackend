import { Sale } from './sale.entity';
import { Item } from './../../item/entities/item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SaleItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  weight: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Item, (item) => item.saleItems)
  item: Item;

  @ManyToOne(() => Sale, (sale) => sale.saleItems)
  sale: Sale;
}
