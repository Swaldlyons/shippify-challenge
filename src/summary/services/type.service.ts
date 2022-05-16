import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Type } from "../entities/type.entity";

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>
  ) {}

  async insert(data: Type | Type[]): Promise<Type | Type[]> {
    await this.typeRepository.insert(data);
    return data;
  }

  async findByType(type: string): Promise<Type> {
    return await this.typeRepository.findOne({ type });
  }

  async deleteAll() {
    return this.typeRepository.delete({});
  }
}
