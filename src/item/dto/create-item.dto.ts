export class CreateItemDto {
   name: string;
   id: number;
   unitCode: string;
   productDescription!: string;
   category:number ;
   supplier: number;
   minOrder: number;
   unitCost: number;
   marketPrice: number;
   predictedPrice: number;
}
