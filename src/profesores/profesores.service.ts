import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesoresService {
  constructor(
    @InjectRepository(Profesor)
    private profesoresRepository: Repository<Profesor>,
  ) {}

  profesores(): Promise<Profesor[]> {
    return this.profesoresRepository.find();
  }

  profesorById(id: number): Promise<Profesor> {
    return this.profesoresRepository.findOne({ where: { id } });
  }
}
