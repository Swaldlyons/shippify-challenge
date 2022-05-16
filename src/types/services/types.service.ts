import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Type } from "../entities/type.entity";

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>
  ) {}

  async insert(data: Type | Type[]): Promise<Type | Type[]> {
    await this.typeRepository.insert(data);
    return data;
  }

  async findAll(): Promise<Type[]> {
    return await this.typeRepository.find();
  }

  async findOne(id: number): Promise<Type> {
    return await this.typeRepository.findOne({ id });
  }

  async update(id: number, data: Type): Promise<Type> {
    await this.typeRepository.update({ id }, data);
    return data;
  }

  async findByType(type: string): Promise<Type> {
    return await this.typeRepository.findOne({ type });
  }

  async deleteAll() {
    return this.typeRepository.delete({});
  }

  async remove(id: number) {
    return this.typeRepository.delete({ id });
  }
}
