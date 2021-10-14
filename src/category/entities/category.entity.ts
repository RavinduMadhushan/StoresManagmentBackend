import { Item } from "src/item/entities/item.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

@Entity()
export class Category {
    
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @OneToMany(() => Item, (item) => item.category)
    items: Item[];
  
}
