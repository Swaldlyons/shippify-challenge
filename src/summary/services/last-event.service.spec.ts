import { Test, TestingModule } from "@nestjs/testing";
import { LastEventService } from "./last-event.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { LastEvent } from "../entities/last-event.entity";

describe("LastEventService", () => {
  let service: LastEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LastEventService,
        {
          provide: getRepositoryToken(LastEvent),
          useValue: LastEvent,
        },
      ],
    }).compile();

    service = module.get<LastEventService>(LastEventService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
