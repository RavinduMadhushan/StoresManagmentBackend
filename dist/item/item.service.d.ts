import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Repository, Connection } from 'typeorm';
export declare class ItemService {
    private itemRepository;
    private Connection;
    constructor(itemRepository: Repository<Item>, Connection: Connection);
    create(createItemDto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): string;
    update(id: number, updateSparepartDto: UpdateItemDto): string;
    remove(id: number): string;
}
