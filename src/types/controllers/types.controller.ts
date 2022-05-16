import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TypesService } from "../services/types.service";
import { CreateTypeDto } from "../dto/create-type.dto";
import { UpdateTypeDto } from "../dto/update-type.dto";
import { Type } from "../entities/type.entity";

@Controller("types")
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.insert(<Type>createTypeDto);
  }

  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, <Type>updateTypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.typesService.remove(+id);
  }
}
