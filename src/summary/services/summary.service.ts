import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Summary } from "../entities/summary.entity";

@Injectable()
export class SummaryService {
  constructor(
    @InjectRepository(Summary)
    private summaryRepository: Repository<Summary>
  ) {}

  async insert(data: Summary | Summary[]): Promise<Summary | Summary[]> {
    await this.summaryRepository.insert(data);
    return data;
  }

  async deleteAll() {
    return this.summaryRepository.delete({});
  }
}
