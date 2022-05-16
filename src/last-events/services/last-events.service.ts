import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LastEvent } from "../entities/last-event.entity";

@Injectable()
export class LastEventsService {
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

  async findAll(): Promise<LastEvent[]> {
    return await this.lastEventRepository.find();
  }

  async findOne(id: number): Promise<LastEvent> {
    return await this.lastEventRepository.findOne({ id });
  }

  async update(id: number, data: LastEvent): Promise<LastEvent> {
    await this.lastEventRepository.update({ id }, data);
    return data;
  }

  async findByTypeAndSucursal([type, sucursal]: number[]): Promise<LastEvent> {
    return await this.lastEventRepository.findOne({ type, sucursal });
  }

  async deleteAll() {
    return this.lastEventRepository.delete({});
  }

  async remove(id: number) {
    return this.lastEventRepository.delete({ id });
  }
}
