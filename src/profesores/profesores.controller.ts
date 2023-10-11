import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesorService: ProfesoresService) {}

  @Get('/get-all')
  getAll() {
    return this.profesorService.profesores();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.profesorService.profesorById(id);
  }
}
