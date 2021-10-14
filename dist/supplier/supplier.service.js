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
exports.SupplierService = void 0;
const supplier_entity_1 = require("./entities/supplier.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SupplierService = class SupplierService {
    constructor(suppliersRepository) {
        this.suppliersRepository = suppliersRepository;
    }
    async create(createSupplierDto) {
        return await this.suppliersRepository.save(createSupplierDto);
    }
    async findAll() {
        return await this.suppliersRepository.find();
    }
    async findOne(id) {
        return await this.suppliersRepository.findOne(id);
    }
    async update(id, updateSupplierDto) {
        return await this.suppliersRepository.update(id, updateSupplierDto);
    }
};
SupplierService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(supplier_entity_1.Supplier)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SupplierService);
exports.SupplierService = SupplierService;
//# sourceMappingURL=supplier.service.js.map