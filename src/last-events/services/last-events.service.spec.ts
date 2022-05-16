import { Test, TestingModule } from "@nestjs/testing";
import { LastEventsService } from "./last-events.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { LastEvent } from "../entities/last-event.entity";

describe("LastEventsService", () => {
  let service: LastEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LastEventsService,
        {
          provide: getRepositoryToken(LastEvent),
          useValue: LastEvent,
        },
      ],
    }).compile();

    service = module.get<LastEventsService>(LastEventsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
