import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customersRepository.save(createCustomerDto);
  }

  async findAll() {
    return await this.customersRepository.find();
  }

  async findOne(id: number) {
    return await this.customersRepository.findOne(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
