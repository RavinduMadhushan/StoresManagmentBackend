import { Sale } from 'src/sales/entities/sale.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  contactNumber: string;

  @Column()
  photo: string;

  @OneToMany(() => Sale, (sale) => sale.customer)
  sales: Sale[];
}
