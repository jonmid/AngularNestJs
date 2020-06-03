import { Document } from 'mongoose';

export interface Tarea extends Document {
  id?: string;
  name: string;
  completed: boolean;
}
