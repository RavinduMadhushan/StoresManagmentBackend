import { Sale } from './sale.entity';
import { Item } from './../../item/entities/item.entity';
export declare class SaleItem {
    id: number;
    price: number;
    quantity: number;
    item: Item;
    sale: Sale;
}
