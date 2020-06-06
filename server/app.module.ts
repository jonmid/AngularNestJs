import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { TareaModule } from './src/tarea/tarea.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/tareas-database', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TareaModule,
  ],
  controllers: [],
})
export class ApplicationModule {}
