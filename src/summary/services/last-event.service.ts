import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LastEvent } from "../entities/last-event.entity";

@Injectable()
export class LastEventService {
  constructor(
    @InjectRepository(LastEvent)
    private lastEventRepository: Repository<LastEvent>
  ) {}

  async create(data: LastEvent): Promise<LastEvent> {
    return this.lastEventRepository.create(data);
  }
}
