import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTareaDto } from '../dto/create-tarea.dto';
import { Tarea } from '../interfaces/tarea.interface';
import { TareaService } from '../services/tarea/tarea.service';

@Controller('tareas')
export class TareasController {
  constructor(private todosSvc: TareaService) {}

  // http://localhost:4200/api/tareas
  @Get()
  async all(): Promise<Tarea[]> {
    return this.todosSvc.all();
  }

  @Post()
  async add(@Body() todo: CreateTareaDto): Promise<Tarea> {
    return this.todosSvc.add(todo);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todo: CreateTareaDto
  ): Promise<Tarea> {
    return this.todosSvc.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Tarea> {
    return this.todosSvc.delete(id);
  }
}
