import { Stock } from './../stock/entities/stock.entity';
import { Purchase } from 'src/purchases/entities/purchase.entity';
import { Supplier } from './../supplier/entities/supplier.entity';
import { Item } from './../item/entities/item.entity';
import { PurchaseItem } from './entities/purchase-item.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Connection, EntityManager, Repository } from 'typeorm';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>,
    private connection: Connection,
  ) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const entityManager: EntityManager = this.connection.manager;
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
 

     
      const purchaseItem: Purchase = new Purchase();
      purchaseItem.Date=new Date();
      purchaseItem.quantity=createPurchaseDto.quantity;
      let itemcategory: Item = await queryRunner.manager.findOne(Item, createPurchaseDto.itemId);
      purchaseItem.item=itemcategory;

      let stock: Stock = await queryRunner.manager.findOne(Stock, { itemId : createPurchaseDto.itemId });
    
      console.log()
      stock.quantity =+stock.quantity + +createPurchaseDto.quantity;
      
      await queryRunner.manager.save(stock);
   

      // const purchase: Purchase = new Purchase();
      let r = await queryRunner.manager.save(purchaseItem);

      // const purchaseObj = await queryRunner.manager.save(purchase);
      await queryRunner.commitTransaction();
      return purchaseItem;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.purchaseRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} purchase`;
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return `This action updates a #${id} purchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
