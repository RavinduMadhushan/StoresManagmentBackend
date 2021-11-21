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
exports.SalesService = void 0;
const customer_entity_1 = require("./../customer/entities/customer.entity");
const saleItem_entity_1 = require("./entities/saleItem.entity");
const sale_entity_1 = require("./entities/sale.entity");
const stock_entity_1 = require("./../stock/entities/stock.entity");
const item_entity_1 = require("./../item/entities/item.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SalesService = class SalesService {
    constructor(saleRepository, connection) {
        this.saleRepository = saleRepository;
        this.connection = connection;
    }
    async create(createSaleDto) {
        const entityManager = this.connection.manager;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const saleItems = [];
            for (let index = 0; index < createSaleDto.saleItems.length; index++) {
                const element = createSaleDto.saleItems[index];
                const saleItem = new saleItem_entity_1.SaleItem();
                let stock = await queryRunner.manager.findOne(stock_entity_1.Stock, {
                    itemId: element.itemId,
                });
                saleItem.price = element.price;
                saleItem.quantity = element.quantity;
                const item = await queryRunner.manager.findOne(item_entity_1.Item, element.itemId);
                stock.quantity = +stock.quantity - +element.quantity;
                await queryRunner.manager.save(stock);
                saleItem.item = item;
                saleItem;
                await queryRunner.manager.save(saleItem);
                saleItems.push(saleItem);
            }
            const customer = await queryRunner.manager.findOne(customer_entity_1.Customer, createSaleDto.customerId);
            const sale = new sale_entity_1.Sale();
            sale.Date = new Date();
            sale.customer = customer;
            sale.saleItems = saleItems;
            const saleObj = await queryRunner.manager.save(sale);
            console.log(saleObj);
            await queryRunner.commitTransaction();
            return saleObj;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        return await this.saleRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} sale`;
    }
    update(id, updateSaleDto) {
        return `This action updates a #${id} sale`;
    }
    remove(id) {
        return `This action removes a #${id} sale`;
    }
};
SalesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(sale_entity_1.Sale)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], SalesService);
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map