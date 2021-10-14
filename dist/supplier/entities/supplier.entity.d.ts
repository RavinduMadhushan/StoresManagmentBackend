import { Item } from 'src/item/entities/item.entity';
export declare class Supplier {
    id: number;
    name: string;
    code: string;
    streetAddress: string;
    city: string;
    postCode: string;
    email: string;
    contactPerson: string;
    contactNumber: string;
    suppliers: Item[];
}
