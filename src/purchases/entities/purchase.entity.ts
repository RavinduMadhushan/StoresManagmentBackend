import { Supplier } from './../../supplier/entities/supplier.entity';
import { PurchaseItem } from './purchase-item.entity';
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
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Date: Date;

  @Column()
  quantity: number;

  @ManyToOne(() => Item, (item) => item.purchaseItems,{eager:true})
  item: Item;
}
