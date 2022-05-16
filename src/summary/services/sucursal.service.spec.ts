import { Test, TestingModule } from "@nestjs/testing";
import { SucursalService } from "./sucursal.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Sucursal } from "../entities/sucursal.entity";

describe("SucursalService", () => {
  let service: SucursalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SucursalService,
        {
          provide: getRepositoryToken(Sucursal),
          useValue: Sucursal,
        },
      ],
    }).compile();

    service = module.get<SucursalService>(SucursalService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
