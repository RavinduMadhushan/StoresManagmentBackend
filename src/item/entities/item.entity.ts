import { SaleItem } from './../../sales/entities/saleItem.entity';
import { PurchaseItem } from 'src/purchases/entities/purchase-item.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Stock } from 'src/stock/entities/stock.entity';
import { Category } from 'src/category/entities/category.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unitCode: string;

  @Column()
  productDescription: string;

  @Column()
  minOrder: number;

  @Column()
  unitCost: number;

  @Column()
  marketPrice: number;

  @Column()
  predictedPrice: number;
  
  @OneToMany(() => PurchaseItem, (purchaseItem) => purchaseItem.item)
  purchaseItems: PurchaseItem[];

  @OneToMany(() => SaleItem, (saleItem) => saleItem.item)
  saleItems: SaleItem[];

  @OneToMany(() => Stock, (stock) => stock.item)
  stocks: Stock[];

  @ManyToOne(() => Supplier, supplier => supplier.suppliers,{eager:true})
  supplier: Supplier;

  @ManyToOne(() => Category, category => category.items,{eager:true})
  category: Category;
}
