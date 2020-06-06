import { Injectable } from '@nestjs/common';
import { Tarea } from '../../interfaces/tarea.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTareaDto } from '../../dto/create-tarea.dto';

@Injectable()
export class TareaService {
  constructor(@InjectModel('Tarea') private readonly todoModel: Model<Tarea>) {}

  async all(): Promise<Tarea[]> {
    return this.todoModel.find();
  }

  async add(todo: CreateTareaDto): Promise<Tarea> {
    const createTodo = new this.todoModel(todo);
    return createTodo.save();
  }

  async update(id: string, todo: CreateTareaDto): Promise<Tarea> {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async delete(id: string): Promise<Tarea> {
    return this.todoModel.findByIdAndDelete(id);
  }
}
