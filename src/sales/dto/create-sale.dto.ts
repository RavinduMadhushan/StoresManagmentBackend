export class CreateSaleDto {
  customerId: number;
  saleItems: SaleItemDto[];
}
class SaleItemDto {
  itemId: number;
  weight: string;
  price: number;
  quantity: number;
}
