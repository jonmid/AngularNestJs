import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tareas')
export class TareasController {
  // http://localhost:4200/api/tareas
  @Get()
  all(): string {
    return 'All TAREAS';
  }
  @Post()
  add(): string {
    return 'ADD TAREAS';
  }

  @Put()
  update(): string {
    return 'UPDATE TAREAS';
  }

  @Delete()
  delete(): string {
    return 'DELETE TAREAS';
  }
}
