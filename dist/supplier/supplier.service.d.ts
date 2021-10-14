import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Repository } from 'typeorm';
export declare class SupplierService {
    private suppliersRepository;
    constructor(suppliersRepository: Repository<Supplier>);
    create(createSupplierDto: CreateSupplierDto): Promise<CreateSupplierDto & Supplier>;
    findAll(): Promise<Supplier[]>;
    findOne(id: number): Promise<Supplier>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<import("typeorm").UpdateResult>;
}
