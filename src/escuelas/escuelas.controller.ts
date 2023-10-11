import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';

@Controller('escuelas')
export class EscuelasController {
  constructor(private readonly escuelasService: EscuelasService) {}

  @Get('/get-all')
  getAll() {
    return this.escuelasService.escuelas();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.escuelasService.escuelaById(id);
  }
}
