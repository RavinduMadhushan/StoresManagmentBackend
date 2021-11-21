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
exports.Item = void 0;
const saleItem_entity_1 = require("./../../sales/entities/saleItem.entity");
const purchase_item_entity_1 = require("../../purchases/entities/purchase-item.entity");
const typeorm_1 = require("typeorm");
const stock_entity_1 = require("../../stock/entities/stock.entity");
const category_entity_1 = require("../../category/entities/category.entity");
const supplier_entity_1 = require("../../supplier/entities/supplier.entity");
let Item = class Item {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Item.prototype, "unitCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Item.prototype, "productDescription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Item.prototype, "minOrder", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Item.prototype, "unitCost", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Item.prototype, "marketPrice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Item.prototype, "predictedPrice", void 0);
__decorate([
    typeorm_1.OneToMany(() => purchase_item_entity_1.PurchaseItem, (purchaseItem) => purchaseItem.item),
    __metadata("design:type", Array)
], Item.prototype, "purchaseItems", void 0);
__decorate([
    typeorm_1.OneToMany(() => saleItem_entity_1.SaleItem, (saleItem) => saleItem.item),
    __metadata("design:type", Array)
], Item.prototype, "saleItems", void 0);
__decorate([
    typeorm_1.OneToMany(() => stock_entity_1.Stock, (stock) => stock.item),
    __metadata("design:type", Array)
], Item.prototype, "stocks", void 0);
__decorate([
    typeorm_1.ManyToOne(() => supplier_entity_1.Supplier, (supplier) => supplier.suppliers, { eager: true }),
    __metadata("design:type", supplier_entity_1.Supplier)
], Item.prototype, "supplier", void 0);
__decorate([
    typeorm_1.ManyToOne(() => category_entity_1.Category, (category) => category.items, { eager: true }),
    __metadata("design:type", category_entity_1.Category)
], Item.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Item.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Item.prototype, "supplierId", void 0);
Item = __decorate([
    typeorm_1.Entity()
], Item);
exports.Item = Item;
//# sourceMappingURL=item.entity.js.map