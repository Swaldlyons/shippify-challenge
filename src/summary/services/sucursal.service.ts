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

  async insert(data: Sucursal | Sucursal[]): Promise<Sucursal | Sucursal[]> {
    await this.sucursalRepository.insert(data);
    return data;
  }

  async findBySucursal(sucursal: string): Promise<Sucursal> {
    return await this.sucursalRepository.findOne({ sucursal });
  }

  async deleteAll() {
    return this.sucursalRepository.delete({});
  }
}
