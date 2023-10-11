import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profesor')
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  apellido: string;
}
