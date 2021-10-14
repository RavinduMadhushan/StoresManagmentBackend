import { Item } from './../../item/entities/item.entity';
export declare class Stock {
    id: number;
    quantity: number;
    predictedQuantity: number;
    itemId: number;
    item: Item;
}
