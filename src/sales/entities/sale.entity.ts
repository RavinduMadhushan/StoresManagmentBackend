import { Customer } from './../../customer/entities/customer.entity';
import { SaleItem } from './saleItem.entity';
import { Item } from './../../item/entities/item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Date: Date;

  @ManyToOne(() => Customer, (customer) => customer.sales, { eager: true })
  customer: Customer;

  @OneToMany(() => SaleItem, (saleItem) => saleItem.sale)
  saleItems: SaleItem[];
}
