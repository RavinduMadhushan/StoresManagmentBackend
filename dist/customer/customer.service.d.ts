import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
export declare class CustomerService {
    private customersRepository;
    constructor(customersRepository: Repository<Customer>);
    create(createCustomerDto: CreateCustomerDto): Promise<CreateCustomerDto & Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): string;
    update(id: number, updateCustomerDto: UpdateCustomerDto): string;
    remove(id: number): string;
}
