import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Sucursal } from "../entities/sucursal.entity";

@Injectable()
export class SucursalesService {
  constructor(
    @InjectRepository(Sucursal)
    private sucursalRepository: Repository<Sucursal>
  ) {}

  async insert(data: Sucursal | Sucursal[]): Promise<Sucursal | Sucursal[]> {
    await this.sucursalRepository.insert(data);
    return data;
  }

  async findAll(): Promise<Sucursal[]> {
    return await this.sucursalRepository.find();
  }

  async findOne(id: number): Promise<Sucursal> {
    return await this.sucursalRepository.findOne({ id });
  }

  async update(id: number, data: Sucursal): Promise<Sucursal> {
    await this.sucursalRepository.update({ id }, data);
    return data;
  }

  async findBySucursal(sucursal: string): Promise<Sucursal> {
    return await this.sucursalRepository.findOne({ sucursal });
  }

  async deleteAll() {
    return this.sucursalRepository.delete({});
  }

  async remove(id: number) {
    return this.sucursalRepository.delete({ id });
  }
}
