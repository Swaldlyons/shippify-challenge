import { Test, TestingModule } from "@nestjs/testing";
import { SucursalesController } from "./sucursales.controller";
import { SucursalesService } from "../services/sucursales.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Sucursal } from "../entities/sucursal.entity";

describe("SucursalesController", () => {
  let controller: SucursalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SucursalesController],
      providers: [
        SucursalesService,
        {
          provide: getRepositoryToken(Sucursal),
          useValue: Sucursal,
        },
      ],
    }).compile();

    controller = module.get<SucursalesController>(SucursalesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
