import { Module } from "@nestjs/common";
import { LastEventsController } from "./controllers/last-events.controller";
import { LastEventsService } from "./services/last-events.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LastEvent } from "./entities/last-event.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LastEvent])],
  controllers: [LastEventsController],
  providers: [LastEventsService],
})
export class LastEventsModule {}
