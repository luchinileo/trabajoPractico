import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EscuelasService {
  constructor(
    @InjectRepository(Escuela)
    private escuelasRepository: Repository<Escuela>,
  ) {}

  escuelas(): Promise<Escuela[]> {
    return this.escuelasRepository.find();
  }

  escuelaById(id: number): Promise<Escuela> {
    return this.escuelasRepository.findOne({ where: { id } });
  }
}
