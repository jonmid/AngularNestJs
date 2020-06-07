import { Tarea } from '@serverApi/src/tarea/interfaces/tarea.interface';

export class GetTareas {
  static readonly type = '[Tareas] Get';
}

export class AddTarea {
  static readonly type = '[Tareas] Add';
  constructor(public payload: Tarea) {}
}

export class UpdateTarea {
  static readonly type = '[Tareas] Update';
  constructor(public id: string, public payload: Tarea) {}
}

export class DeleteTarea {
  static readonly type = '[Tareas] Delete';
  constructor(public id: string) {}
}

export class SetSelectedTarea {
  static readonly type = '[Tareas] Set';
  constructor(public payload: Tarea) {}
}
