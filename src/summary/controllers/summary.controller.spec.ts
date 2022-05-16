import { Test, TestingModule } from "@nestjs/testing";
import { SummaryService } from "../services/summary.service";
import { SummaryController } from "./summary.controller";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Summary } from "../entities/summary.entity";

describe("SummaryController", () => {
  let controller: SummaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummaryController],
      providers: [
        SummaryService,
        {
          provide: getRepositoryToken(Summary),
          useValue: Summary,
        },
      ],
    }).compile();

    controller = module.get<SummaryController>(SummaryController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
