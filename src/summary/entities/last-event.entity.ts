import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LastEvent {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ nullable: false, type: "int" })
  type: number;

  @Column({ nullable: false, type: "int" })
  sucursal: number;
}
