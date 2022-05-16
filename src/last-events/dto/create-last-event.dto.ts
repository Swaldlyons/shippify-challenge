import { IsNotEmpty, IsString } from "class-validator";

export class CreateLastEventDto {
  @IsString()
  @IsNotEmpty()
  readonly type: number;

  @IsString()
  @IsNotEmpty()
  readonly sucursal: number;
}
