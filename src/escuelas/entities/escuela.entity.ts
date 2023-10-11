import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('escuela')
export class Escuela {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  domicilio: string | null;

  @Column({ type: 'text', nullable: true })
  ciudad: string | null;
}
