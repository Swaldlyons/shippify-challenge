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

  async create(data: Type): Promise<Type> {
    return this.typeRepository.create(data);
  }
}
