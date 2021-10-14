import { Purchase } from 'src/purchases/entities/purchase.entity';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Connection, Repository } from 'typeorm';
export declare class PurchasesService {
    private purchaseRepository;
    private connection;
    constructor(purchaseRepository: Repository<Purchase>, connection: Connection);
    create(createPurchaseDto: CreatePurchaseDto): Promise<Purchase>;
    findAll(): Promise<Purchase[]>;
    findOne(id: number): string;
    update(id: number, updatePurchaseDto: UpdatePurchaseDto): string;
    remove(id: number): string;
}
