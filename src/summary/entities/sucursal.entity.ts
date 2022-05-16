import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sucursal {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ nullable: false, type: "varchar", length: 255 })
  sucursal: string;
}
