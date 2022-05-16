import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class CreateSummaryDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  readonly datetime: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsNumber()
  @IsNotEmpty()
  readonly lastEvent: number;
}
