import { IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class DatesDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  readonly fromDate: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  readonly toDate: Date;
}
