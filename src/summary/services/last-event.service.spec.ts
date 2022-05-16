import { Test, TestingModule } from "@nestjs/testing";
import { LastEventService } from "./last-event.service";

describe("LastEventService", () => {
  let service: LastEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LastEventService],
    }).compile();

    service = module.get<LastEventService>(LastEventService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
