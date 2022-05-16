import { Module } from "@nestjs/common";
import { SucursalesService } from "./services/sucursales.service";
import { SucursalesController } from "./controllers/sucursales.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Sucursal } from "./entities/sucursal.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Sucursal])],
  controllers: [SucursalesController],
  providers: [SucursalesService],
})
export class SucursalesModule {}
