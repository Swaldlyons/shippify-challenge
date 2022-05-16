import { Test, TestingModule } from "@nestjs/testing";
import { LastEventsController } from "./last-events.controller";
import { LastEventsService } from "../services/last-events.service";

describe("LastEventsController", () => {
  let controller: LastEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LastEventsController],
      providers: [LastEventsService],
    }).compile();

    controller = module.get<LastEventsController>(LastEventsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
