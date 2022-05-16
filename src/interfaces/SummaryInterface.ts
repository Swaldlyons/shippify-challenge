import { LastEventInterface } from "./LastEventInterface";

export interface SummaryInterface {
  datetime: Date;
  amount: number;
  lastEvent: LastEventInterface;
}
