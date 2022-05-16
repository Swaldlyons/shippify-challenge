import { Test, TestingModule } from "@nestjs/testing";
import { LastEventsController } from "./last-events.controller";
import { LastEventsService } from "../services/last-events.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { LastEvent } from "../entities/last-event.entity";

describe("LastEventsController", () => {
  let controller: LastEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LastEventsController],
      providers: [
        LastEventsService,
        {
          provide: getRepositoryToken(LastEvent),
          useValue: LastEvent,
        },
      ],
    }).compile();

    controller = module.get<LastEventsController>(LastEventsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
