import { Test, TestingModule } from "@nestjs/testing";
import { TypesController } from "./types.controller";
import { TypesService } from "../services/types.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Type } from "../entities/type.entity";

describe("TypesController", () => {
  let controller: TypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesController],
      providers: [
        TypesService,
        {
          provide: getRepositoryToken(Type),
          useValue: Type,
        },
      ],
    }).compile();

    controller = module.get<TypesController>(TypesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
