import { Stock } from './../stock/entities/stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Repository, Connection } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
    private Connection: Connection,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const queryRunner = this.Connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const item: Item = new Item();
      item.productDescription = createItemDto.productDescription;
      item.marketPrice = createItemDto.marketPrice;
      item.minOrder = createItemDto.minOrder;
      item.predictedPrice = createItemDto.predictedPrice;
      item.unitCode = createItemDto.unitCode;
      item.unitCost = createItemDto.unitCost;
      let category: Category = await queryRunner.manager.findOne(Category, createItemDto.category);
      let supplier: Supplier = await queryRunner.manager.findOne(Supplier, createItemDto.supplier);

      item.supplier=supplier;
      console.log(category);
      item.category = category;

      let r = await queryRunner.manager.save(item);
      console.log(r);

      const stock5: Stock = new Stock();

      stock5.item = item;
      stock5.quantity = 0;
      stock5.predictedQuantity=0;
      await queryRunner.manager.save(stock5);





      await queryRunner.commitTransaction();
      return item;
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} itemdetail`;
  }

  update(id: number, updateSparepartDto: UpdateItemDto) {
    return `This action updates a #${id} itemdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemdetail`;
  }
}
