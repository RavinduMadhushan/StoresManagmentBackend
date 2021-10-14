import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
export declare class PurchasesController {
    private readonly purchasesService;
    constructor(purchasesService: PurchasesService);
    create(createPurchaseDto: CreatePurchaseDto): Promise<import("./entities/purchase.entity").Purchase>;
    findAll(): Promise<import("./entities/purchase.entity").Purchase[]>;
    findOne(id: string): string;
    update(id: string, updatePurchaseDto: UpdatePurchaseDto): string;
    remove(id: string): string;
}
