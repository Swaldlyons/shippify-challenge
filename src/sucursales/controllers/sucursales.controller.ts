import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SucursalesService } from "../services/sucursales.service";
import { CreateSucursalDto } from "../dto/create-sucursal.dto";
import { UpdateSucursalDto } from "../dto/update-sucursal.dto";
import { Sucursal } from "../entities/sucursal.entity";

@Controller("sucursales")
export class SucursalesController {
  constructor(private readonly sucursalesService: SucursalesService) {}

  @Post()
  create(@Body() createSucursaleDto: CreateSucursalDto) {
    return this.sucursalesService.insert(<Sucursal>createSucursaleDto);
  }

  @Get()
  findAll() {
    return this.sucursalesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sucursalesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSucursaleDto: UpdateSucursalDto
  ) {
    return this.sucursalesService.update(+id, <Sucursal>updateSucursaleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.sucursalesService.remove(+id);
  }
}
