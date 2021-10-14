export declare class CreateSaleDto {
    customerId: number;
    saleItems: SaleItemDto[];
}
declare class SaleItemDto {
    itemId: number;
    weight: string;
    price: number;
    quantity: number;
}
export {};
