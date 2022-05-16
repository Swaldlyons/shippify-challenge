import { PartialType } from "@nestjs/mapped-types";
import { CreateLastEventDto } from "./create-last-event.dto";

export class UpdateLastEventDto extends PartialType(CreateLastEventDto) {}
