import { Controller, Post, Body } from "@nestjs/common";
import { FormDataRequest } from "nestjs-form-data";
import { PayloadTestDto } from "./dto/payload-test.dto";

@Controller("summary")
export class SummaryController {
  @Post("load-mock-data")
  @FormDataRequest()
  async create(@Body() payload: PayloadTestDto) {
    return Object.values(JSON.parse(payload.file.buffer.toString())).flat();
  }
}
