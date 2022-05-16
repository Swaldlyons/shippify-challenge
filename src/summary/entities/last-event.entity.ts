import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Type } from "./type.entity";
import { Sucursal } from "./sucursal.entity";

@Entity()
export class LastEvent {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => Type)
  @JoinColumn({ name: "type" })
  type: Type;

  @OneToOne(() => Sucursal)
  @JoinColumn({ name: "sucursal" })
  sucursal: Sucursal;
}
