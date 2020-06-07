import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tarea } from '@serverApi/src/tarea/interfaces/tarea.interface';
import {
  GetTareas,
  AddTarea,
  UpdateTarea,
  DeleteTarea,
  SetSelectedTarea,
} from './tareas.actions';

export class TareasStateModel {
  public tareas: Tarea[];
  public selectedTarea: Tarea;
}

const defaults = {
  tareas: [],
  selectedTarea: null,
};

@State<TareasStateModel>({
  name: 'tareas',
  defaults,
})
@Injectable()
export class TareasState {
  @Selector()
  public static getTareasList({ tareas }: TareasStateModel) {
    return tareas;
  }

  @Selector()
  public static getSelectedTarea({ selectedTarea }) {
    return selectedTarea;
  }

  @Action(GetTareas)
  getTareas({ getState, setState }: StateContext<TareasStateModel>) {
    // call service
    return;
  }

  @Action(AddTarea)
  addTarea(
    { getState, patchState }: StateContext<TareasStateModel>,
    { payload }: AddTarea
  ) {
    // call service
    return;
  }

  @Action(UpdateTarea)
  updateTarea(
    { getState, setState }: StateContext<TareasStateModel>,
    { id, payload }: UpdateTarea
  ) {
    // call service
    return;
  }

  @Action(DeleteTarea)
  deleteTarea(
    { getState, setState }: StateContext<TareasStateModel>,
    { id }: DeleteTarea
  ) {
    // call service
    return;
  }

  @Action(SetSelectedTarea)
  setSelectedTarea(
    { getState, setState }: StateContext<TareasStateModel>,
    { payload }: SetSelectedTarea
  ) {
    // call service
    return;
  }
}
