import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { SummaryService } from "../services/summary.service";
import { DatesDto } from "../dto/dates.dto";
import { CreateSummaryDto } from "../dto/create-summary.dto";
import { Summary } from "../entities/summary.entity";
import { UpdateSummaryDto } from "../dto/update-summary.dto";

const PRECISION = 2;

@Controller("summary")
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Get("report")
  async report(@Query() dates: DatesDto) {
    const result = await this.summaryService.sumAmountBetweenDates(dates);
    const basePrice: number = result.amount;
    const insurance: number = this.insurance(basePrice);
    const services: number = this.services([basePrice, result.countAmount]);
    const commissions: number = this.commissions(basePrice);
    const IVA: number = this.IVA(basePrice);
    const total: number = this.precision(
      basePrice + insurance + services + commissions + IVA,
      PRECISION
    );

    return {
      dates,
      basePrice,
      insurance,
      services,
      commissions,
      IVA,
      total,
    };
  }

  @Post()
  create(@Body() createSummaryDto: CreateSummaryDto) {
    return this.summaryService.insert(<Summary>createSummaryDto);
  }

  @Get()
  findAll() {
    return this.summaryService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.summaryService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSummaryDto: UpdateSummaryDto) {
    return this.summaryService.update(+id, <Summary>updateSummaryDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.summaryService.remove(+id);
  }

  private precision = (number, precision): number => {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  private insurance(basePrice: number): number {
    return basePrice > 100
      ? this.precision(basePrice * 0.05 * -1, PRECISION)
      : 0;
  }

  private services([basePrice, countAmount]: number[]): number {
    if (countAmount > 4) {
      const fourTimes = basePrice * 0.02;
      const extra = countAmount - 4 * 0.25;
      return this.precision(fourTimes + extra, PRECISION) * -1;
    }
    return 0;
  }

  private IVA(basePrice: number): number {
    return this.precision(basePrice * 0.12, PRECISION);
  }

  private commissions(basePrice: number): number {
    return basePrice > 100 ? this.precision(basePrice * 0.01, PRECISION) : 0;
  }
}
