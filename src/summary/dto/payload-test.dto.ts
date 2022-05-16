import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { HasMimeType, IsFile, MemoryStoredFile } from "nestjs-form-data";

export class LastEventDto {
  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly sucursal: string;
}

export class DataPayloadDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  readonly datetime: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsDefined()
  @IsNotEmpty()
  @Type(() => LastEventDto)
  readonly lastEvent: LastEventDto;
}

export class PayloadTestDto {
  @IsFile()
  @HasMimeType(["application/json"])
  readonly file: MemoryStoredFile;
}
