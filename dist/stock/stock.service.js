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
exports.StockService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const stock_entity_1 = require("./entities/stock.entity");
const typeorm_2 = require("@nestjs/typeorm");
let StockService = class StockService {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    create(createStockDto) {
        return 'This action adds a new stock';
    }
    async findAll() {
        let result = await this.stockRepository.find();
        console.log(result);
        return result;
    }
    findOne(id) {
        return `This action returns a #${id} stock`;
    }
    update(id, updateStockDto) {
        return `This action updates a #${id} stock`;
    }
    remove(id) {
        return `This action removes a #${id} stock`;
    }
};
StockService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(stock_entity_1.Stock)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StockService);
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map