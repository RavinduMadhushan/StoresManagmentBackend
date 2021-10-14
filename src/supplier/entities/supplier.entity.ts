import { Item } from 'src/item/entities/item.entity';
import { PurchaseItem } from 'src/purchases/entities/purchase-item.entity';
import { Purchase } from 'src/purchases/entities/purchase.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code:string

  @Column()
  streetAddress: string;

  @Column()
  city: string;

  @Column()
  postCode: string;

  @Column()
  email: string

  @Column()
  contactPerson: string

  @Column()
  contactNumber: string;

  // @OneToMany(() => PurchaseItem, (purchase) => purch)
  // purchases: PurchaseItem[];

  @OneToMany(() => Item, (supplier) => supplier.supplier)
  suppliers: Item[];
}
