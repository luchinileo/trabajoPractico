import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Get('/get-all')
  getAll() {
    return this.estudiantesService.estudiantes();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.estudianteById(id);
  }
}
