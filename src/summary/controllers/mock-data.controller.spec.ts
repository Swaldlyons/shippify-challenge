import { Test, TestingModule } from "@nestjs/testing";
import { MockDataController } from "./mock-data.controller";
import { SummaryService } from "../services/summary.service";
import { NestjsFormDataModule } from "nestjs-form-data";

describe("MockDataController", () => {
  let controller: MockDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NestjsFormDataModule],
      controllers: [MockDataController],
      providers: [SummaryService],
    }).compile();

    controller = module.get<MockDataController>(MockDataController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
