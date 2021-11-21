import { Customer } from './../customer/entities/customer.entity';
import { SaleItem } from './entities/saleItem.entity';
import { Sale } from './entities/sale.entity';
import { Stock } from './../stock/entities/stock.entity';

import { Item } from './../item/entities/item.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Connection, EntityManager, Repository } from 'typeorm';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
    private connection: Connection,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    const entityManager: EntityManager = this.connection.manager;
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const saleItems: SaleItem[] = [];

      for (let index = 0; index < createSaleDto.saleItems.length; index++) {
        const element = createSaleDto.saleItems[index];
        const saleItem: SaleItem = new SaleItem();

        let stock: Stock = await queryRunner.manager.findOne(Stock, {
          itemId: element.itemId,
        });

        saleItem.price = element.price;
        saleItem.quantity = element.quantity;

        const item: Item = await queryRunner.manager.findOne(
          Item,
          element.itemId,
        );

        //await queryRunner.manager.findOne(Stock,{item})
        stock.quantity = +stock.quantity - +element.quantity;
        await queryRunner.manager.save(stock);

        saleItem.item = item;

        saleItem;

        await queryRunner.manager.save(saleItem);
        saleItems.push(saleItem);
      }

      const customer: Customer = await queryRunner.manager.findOne(
        Customer,
        createSaleDto.customerId,
      );

      const sale: Sale = new Sale();
      sale.Date = new Date();
      sale.customer = customer;
      sale.saleItems = saleItems;

      const saleObj = await queryRunner.manager.save(sale);
      console.log(saleObj);
      await queryRunner.commitTransaction();
      return saleObj;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.saleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
