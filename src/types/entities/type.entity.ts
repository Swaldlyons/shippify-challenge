import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Type {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ nullable: false, type: "varchar", length: 255 })
  type: string;
}
