import { Module } from '@nestjs/common';
import { TareasController } from './controllers/tareas.controller';
import { TareaService } from './services/tarea/tarea.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TareaSchema } from '../tarea/schemas/tarea.schema';

@Module({
  controllers: [TareasController],
  providers: [TareaService],
  imports: [
    MongooseModule.forFeature([{ name: 'Tarea', schema: TareaSchema }]),
  ],
})
export class TareaModule {}
