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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleItem = void 0;
const sale_entity_1 = require("./sale.entity");
const item_entity_1 = require("./../../item/entities/item.entity");
const typeorm_1 = require("typeorm");
let SaleItem = class SaleItem {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SaleItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SaleItem.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SaleItem.prototype, "quantity", void 0);
__decorate([
    typeorm_1.ManyToOne(() => item_entity_1.Item, (item) => item.saleItems),
    __metadata("design:type", item_entity_1.Item)
], SaleItem.prototype, "item", void 0);
__decorate([
    typeorm_1.ManyToOne(() => sale_entity_1.Sale, (sale) => sale.saleItems),
    __metadata("design:type", sale_entity_1.Sale)
], SaleItem.prototype, "sale", void 0);
SaleItem = __decorate([
    typeorm_1.Entity()
], SaleItem);
exports.SaleItem = SaleItem;
//# sourceMappingURL=saleItem.entity.js.map