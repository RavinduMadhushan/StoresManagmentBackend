import { Customer } from './../../customer/entities/customer.entity';
import { SaleItem } from './saleItem.entity';
export declare class Sale {
    id: number;
    Date: Date;
    customer: Customer;
    saleItems: SaleItem[];
}
