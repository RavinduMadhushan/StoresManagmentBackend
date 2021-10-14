import { Sale } from 'src/sales/entities/sale.entity';
export declare class Customer {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    contactNumber: string;
    sales: Sale[];
}
