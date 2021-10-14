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
exports.Supplier = void 0;
const item_entity_1 = require("../../item/entities/item.entity");
const purchase_item_entity_1 = require("../../purchases/entities/purchase-item.entity");
const purchase_entity_1 = require("../../purchases/entities/purchase.entity");
const typeorm_1 = require("typeorm");
let Supplier = class Supplier {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Supplier.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "code", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "streetAddress", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "postCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "contactPerson", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "contactNumber", void 0);
__decorate([
    typeorm_1.OneToMany(() => item_entity_1.Item, (supplier) => supplier.supplier),
    __metadata("design:type", Array)
], Supplier.prototype, "suppliers", void 0);
Supplier = __decorate([
    typeorm_1.Entity()
], Supplier);
exports.Supplier = Supplier;
//# sourceMappingURL=supplier.entity.js.map