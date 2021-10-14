import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
export declare class StockService {
    private stockRepository;
    constructor(stockRepository: Repository<Stock>);
    create(createStockDto: CreateStockDto): string;
    findAll(): Promise<Stock[]>;
    findOne(id: number): string;
    update(id: number, updateStockDto: UpdateStockDto): string;
    remove(id: number): string;
}
