import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierModule } from './supplier/supplier.module';

import { PurchasesModule } from './purchases/purchases.module';
import { StockModule } from './stock/stock.module';
import { ItemModule } from './item/item.module';
import { CustomerModule } from './customer/customer.module';
import { SalesModule } from './sales/sales.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    SupplierModule,
    PurchasesModule,
    StockModule,
    ItemModule,
    CustomerModule,
    SalesModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
