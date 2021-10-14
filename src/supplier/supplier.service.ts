import { Supplier } from './entities/supplier.entity';
import { Injectable, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private suppliersRepository: Repository<Supplier>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    return await this.suppliersRepository.save(createSupplierDto);
  }

  async findAll() {
    return await this.suppliersRepository.find();
  }

  async findOne(id: number) {
    return await this.suppliersRepository.findOne(id);
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return await this.suppliersRepository.update(id, updateSupplierDto);
  }

  /*  async remove(id: number) {
    return await this.suppliersRepository.remove(id);
  } */
}
