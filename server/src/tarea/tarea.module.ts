import { Module } from '@nestjs/common';
import { TareasController } from './controllers/tareas.controller';

@Module({
  controllers: [TareasController],
})
export class TareaModule {}
