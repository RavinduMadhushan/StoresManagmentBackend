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
exports.PurchasesService = void 0;
const stock_entity_1 = require("./../stock/entities/stock.entity");
const purchase_entity_1 = require("./entities/purchase.entity");
const item_entity_1 = require("./../item/entities/item.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PurchasesService = class PurchasesService {
    constructor(purchaseRepository, connection) {
        this.purchaseRepository = purchaseRepository;
        this.connection = connection;
    }
    async create(createPurchaseDto) {
        const entityManager = this.connection.manager;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const purchaseItem = new purchase_entity_1.Purchase();
            purchaseItem.Date = new Date();
            purchaseItem.quantity = createPurchaseDto.quantity;
            let itemcategory = await queryRunner.manager.findOne(item_entity_1.Item, createPurchaseDto.itemId);
            purchaseItem.item = itemcategory;
            let stock = await queryRunner.manager.findOne(stock_entity_1.Stock, {
                itemId: createPurchaseDto.itemId,
            });
            console.log();
            stock.quantity = +stock.quantity + +createPurchaseDto.quantity;
            let r = await queryRunner.manager.save(purchaseItem);
            await queryRunner.commitTransaction();
            return purchaseItem;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        return await this.purchaseRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} purchase`;
    }
    update(id, updatePurchaseDto) {
        return `This action updates a #${id} purchase`;
    }
    remove(id) {
        return `This action removes a #${id} purchase`;
    }
};
PurchasesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(purchase_entity_1.Purchase)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], PurchasesService);
exports.PurchasesService = PurchasesService;
//# sourceMappingURL=purchases.service.js.map