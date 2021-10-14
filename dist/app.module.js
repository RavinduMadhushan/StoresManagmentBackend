"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const supplier_module_1 = require("./supplier/supplier.module");
const purchases_module_1 = require("./purchases/purchases.module");
const stock_module_1 = require("./stock/stock.module");
const item_module_1 = require("./item/item.module");
const customer_module_1 = require("./customer/customer.module");
const sales_module_1 = require("./sales/sales.module");
const category_module_1 = require("./category/category.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({ autoLoadEntities: true }),
            supplier_module_1.SupplierModule,
            purchases_module_1.PurchasesModule,
            stock_module_1.StockModule,
            item_module_1.ItemModule,
            customer_module_1.CustomerModule,
            sales_module_1.SalesModule,
            category_module_1.CategoryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map