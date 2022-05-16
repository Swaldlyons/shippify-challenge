import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigType } from "@nestjs/config";
import config from "../config";
import { LastEvent } from "../summary/entities/last-event.entity";
import { Sucursal } from "../summary/entities/sucursal.entity";
import { Summary } from "../summary/entities/summary.entity";
import { Type } from "../types/entities/type.entity";

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => ({
        ...(configService.database as object),
        entities: [LastEvent, Sucursal, Summary, Type],
        synchronize: false,
      }),
      inject: [config.KEY],
    }),
  ],
})
export class DatabaseModule {}
