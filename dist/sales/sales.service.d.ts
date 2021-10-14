import { Sale } from './entities/sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Connection, Repository } from 'typeorm';
export declare class SalesService {
    private saleRepository;
    private connection;
    constructor(saleRepository: Repository<Sale>, connection: Connection);
    create(createSaleDto: CreateSaleDto): Promise<Sale>;
    findAll(): Promise<Sale[]>;
    findOne(id: number): string;
    update(id: number, updateSaleDto: UpdateSaleDto): string;
    remove(id: number): string;
}
