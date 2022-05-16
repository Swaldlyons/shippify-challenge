import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Summary } from "../entities/summary.entity";
import { DatesDto } from "../dto/dates.dto";

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

  async sumAmountBetweenDates({ fromDate, toDate }: DatesDto) {
    return await this.summaryRepository
      .createQueryBuilder()
      .select("SUM(amount)", "amount")
      .addSelect("COUNT(amount)", "countAmount")
      .andWhere("datetime >= :fromDate")
      .andWhere("datetime <= :toDate")
      .setParameters({ fromDate, toDate })
      .getRawOne();
  }

  async deleteAll() {
    return this.summaryRepository.delete({});
  }
}
