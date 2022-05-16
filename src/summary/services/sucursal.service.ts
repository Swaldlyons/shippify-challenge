import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Sucursal } from "../entities/sucursal.entity";

@Injectable()
export class SucursalService {
  constructor(
    @InjectRepository(Sucursal)
    private sucursalRepository: Repository<Sucursal>
  ) {}

  async create(data: Sucursal): Promise<Sucursal> {
    return this.sucursalRepository.create(data);
  }
}
