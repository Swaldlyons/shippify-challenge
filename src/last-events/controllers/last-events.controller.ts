import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LastEventsService } from "../services/last-events.service";
import { CreateLastEventDto } from "../dto/create-last-event.dto";
import { UpdateLastEventDto } from "../dto/update-last-event.dto";
import { LastEvent } from "../entities/last-event.entity";

@Controller("last-events")
export class LastEventsController {
  constructor(private readonly lastEventsService: LastEventsService) {}

  @Post()
  create(@Body() createLastEventDto: CreateLastEventDto) {
    return this.lastEventsService.insert(<LastEvent>createLastEventDto);
  }

  @Get()
  findAll() {
    return this.lastEventsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.lastEventsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateLastEventDto: UpdateLastEventDto
  ) {
    return this.lastEventsService.update(+id, <LastEvent>updateLastEventDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.lastEventsService.remove(+id);
  }
}
