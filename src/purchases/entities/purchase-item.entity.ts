import { Item } from './../../item/entities/item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Purchase } from './purchase.entity';

@Entity()
export class PurchaseItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Date: Date;

  @Column()
  quantity: number;

  @ManyToOne(() => Item, (item) => item.purchaseItems,{eager:true})
  item: Item;

  
}
