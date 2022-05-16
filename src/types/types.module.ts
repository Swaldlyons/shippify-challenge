import { Module } from "@nestjs/common";
import { TypesService } from "./services/types.service";
import { TypesController } from "./controllers/types.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Type } from "./entities/type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
