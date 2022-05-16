import { Test, TestingModule } from "@nestjs/testing";
import { SucursalesService } from "./sucursales.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Sucursal } from "../entities/sucursal.entity";

describe("SucursalesService", () => {
  let service: SucursalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SucursalesService,
        {
          provide: getRepositoryToken(Sucursal),
          useValue: Sucursal,
        },
      ],
    }).compile();

    service = module.get<SucursalesService>(SucursalesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
