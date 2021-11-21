import { SaleItem } from './../../sales/entities/saleItem.entity';
import { PurchaseItem } from 'src/purchases/entities/purchase-item.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Category } from 'src/category/entities/category.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
export declare class Item {
    id: number;
    unitCode: string;
    productDescription: string;
    minOrder: number;
    unitCost: number;
    marketPrice: number;
    predictedPrice: number;
    purchaseItems: PurchaseItem[];
    saleItems: SaleItem[];
    stocks: Stock[];
    supplier: Supplier;
    category: Category;
    categoryId: number;
    supplierId: number;
}
