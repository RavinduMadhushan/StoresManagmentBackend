import {
  OneToOne,
  Column,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Item } from './../../item/entities/item.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;
  @Column()
  predictedQuantity: number;

  @Column({ nullable: true })
  itemId: number;

  @ManyToOne(() => Item, (item) => item.stocks, { eager: true })
  item: Item;

  // @OneToOne(() => Item)
  // @JoinColumn()
  // item: Item;
}
