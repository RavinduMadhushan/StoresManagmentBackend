import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStockDto: CreateStockDto): string;
    findAll(): Promise<import("./entities/stock.entity").Stock[]>;
    findOne(id: string): string;
    update(id: string, updateStockDto: UpdateStockDto): string;
    remove(id: string): string;
}
