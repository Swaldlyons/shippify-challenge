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

  async create(data: Summary): Promise<Summary> {
    return this.summaryRepository.create(data);
  }
}
