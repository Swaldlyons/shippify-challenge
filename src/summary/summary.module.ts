import { Module } from "@nestjs/common";
import { SummaryService } from "./services/summary.service";
import { SummaryController } from "./summary.controller";
import { NestjsFormDataModule } from "nestjs-form-data";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Summary } from "./entities/summary.entity";
import { LastEvent } from "./entities/last-event.entity";
import { Sucursal } from "./entities/sucursal.entity";
import { Type } from "./entities/type.entity";
import { LastEventService } from "./services/last-event.service";
import { SucursalService } from "./services/sucursal.service";

@Module({
  imports: [
    NestjsFormDataModule,
    TypeOrmModule.forFeature([LastEvent, Sucursal, Summary, Type]),
  ],
  controllers: [SummaryController],
  providers: [LastEventService, SucursalService, SummaryService],
})
export class SummaryModule {}
