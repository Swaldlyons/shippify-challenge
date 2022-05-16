import { Module } from "@nestjs/common";
import { SummaryService } from "./services/summary.service";
import { MockDataController } from "./controllers/mock-data.controller";
import { NestjsFormDataModule } from "nestjs-form-data";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Summary } from "./entities/summary.entity";
import { LastEvent } from "../last-events/entities/last-event.entity";
import { Sucursal } from "../sucursales/entities/sucursal.entity";
import { Type } from "../types/entities/type.entity";
import { LastEventsService } from "../last-events/services/last-events.service";
import { SucursalesService } from "../sucursales/services/sucursales.service";
import { TypesService } from "../types/services/types.service";
import { SummaryController } from "./controllers/summary.controller";

@Module({
  imports: [
    NestjsFormDataModule,
    TypeOrmModule.forFeature([LastEvent, Sucursal, Summary, Type]),
  ],
  controllers: [MockDataController, SummaryController],
  providers: [
    LastEventsService,
    SucursalesService,
    SummaryService,
    TypesService,
  ],
})
export class SummaryModule {}
