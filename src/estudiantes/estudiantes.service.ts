import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  estudiantes(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  estudianteById(id: number): Promise<Estudiante> {
    return this.estudiantesRepository.findOne({ where: { id } });
  }
}
