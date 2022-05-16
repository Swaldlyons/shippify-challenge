import { Test, TestingModule } from "@nestjs/testing";
import { TypesService } from "./types.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Type } from "../entities/type.entity";

describe("TypeService", () => {
  let service: TypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypesService,
        {
          provide: getRepositoryToken(Type),
          useValue: Type,
        },
      ],
    }).compile();

    service = module.get<TypesService>(TypesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
