import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Summary {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ nullable: false, type: "datetime" })
  datetime: Date;

  @Column({ nullable: false, type: "double" })
  amount: number;

  @Column({ nullable: false, type: "int" })
  lastEvent: number;
}
