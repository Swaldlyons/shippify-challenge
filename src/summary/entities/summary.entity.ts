import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { LastEvent } from "./last-event.entity";

@Entity()
export class Summary {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ nullable: false, type: "datetime" })
  datetime: Date;

  @Column({ nullable: false, type: "double" })
  amount: number;

  @OneToOne(() => LastEvent)
  @JoinColumn({ name: "lastEvent" })
  lastEvent: LastEvent;
}
