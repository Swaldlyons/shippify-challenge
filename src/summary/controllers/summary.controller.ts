import { Controller, Get, Query } from "@nestjs/common";
import { SummaryService } from "../services/summary.service";
import { DatesDto } from "../dto/dates.dto";

const PRECISION = 2;

@Controller("summary")
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Get()
  async create(@Query() dates: DatesDto) {
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
