import { Purchase } from './entities/purchase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase])],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
