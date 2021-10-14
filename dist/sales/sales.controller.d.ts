import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: CreateSaleDto): Promise<import("./entities/sale.entity").Sale>;
    findAll(): Promise<import("./entities/sale.entity").Sale[]>;
    findOne(id: string): string;
    update(id: string, updateSaleDto: UpdateSaleDto): string;
    remove(id: string): string;
}
