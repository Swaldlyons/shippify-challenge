import { Test, TestingModule } from "@nestjs/testing";
import { TypeService } from "./type.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Type } from "../entities/type.entity";

describe("TypeService", () => {
  let service: TypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypeService,
        {
          provide: getRepositoryToken(Type),
          useValue: Type,
        },
      ],
    }).compile();

    service = module.get<TypeService>(TypeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
