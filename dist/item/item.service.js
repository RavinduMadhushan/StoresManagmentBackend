"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const stock_entity_1 = require("./../stock/entities/stock.entity");
const typeorm_1 = require("@nestjs/typeorm");
const item_entity_1 = require("./entities/item.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../category/entities/category.entity");
const supplier_entity_1 = require("../supplier/entities/supplier.entity");
let ItemService = class ItemService {
    constructor(itemRepository, Connection) {
        this.itemRepository = itemRepository;
        this.Connection = Connection;
    }
    async create(createItemDto) {
        const queryRunner = this.Connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const item = new item_entity_1.Item();
            item.productDescription = createItemDto.productDescription;
            item.marketPrice = createItemDto.marketPrice;
            item.minOrder = createItemDto.minOrder;
            item.predictedPrice = createItemDto.predictedPrice;
            item.unitCode = createItemDto.unitCode;
            item.unitCost = createItemDto.unitCost;
            let category = await queryRunner.manager.findOne(category_entity_1.Category, createItemDto.categoryId);
            let supplier = await queryRunner.manager.findOne(supplier_entity_1.Supplier, createItemDto.supplierId);
            item.supplier = supplier;
            console.log(category);
            item.category = category;
            let r = await queryRunner.manager.save(item);
            console.log(r);
            const stock5 = new stock_entity_1.Stock();
            stock5.item = item;
            stock5.quantity = 0;
            stock5.predictedQuantity = 0;
            await queryRunner.manager.save(stock5);
            await queryRunner.commitTransaction();
            return item;
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        return await this.itemRepository.find();
    }
    async findOne(id) {
        return await this.itemRepository.findOne(id);
    }
    async update(id, updateSparepartDto) {
        return await this.itemRepository.update(id, updateSparepartDto);
    }
    remove(id) {
        return `This action removes a #${id} itemdetail`;
    }
};
ItemService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(item_entity_1.Item)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map