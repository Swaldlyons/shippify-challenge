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

  async insert(
    data: LastEvent | LastEvent[]
  ): Promise<LastEvent | LastEvent[]> {
    await this.lastEventRepository.insert(data);
    return data;
  }

  async findByTypeAndSucursal([type, sucursal]: number[]): Promise<LastEvent> {
    return await this.lastEventRepository.findOne({ type, sucursal });
  }

  async deleteAll() {
    return this.lastEventRepository.delete({});
  }
}
