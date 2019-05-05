import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { SharedModule } from '../shared/shared.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoInfoComponent,
    TodoAddComponent,
    TodoDetailsComponent,
  ],
  imports: [
    SharedModule,
    TodosRoutingModule
  ],
  entryComponents: [
    TodosComponent,
    TodoInfoComponent,
    TodoAddComponent,
    TodoDetailsComponent,
  ]
})
export class TodosModule {
  constructor(private inject: Injector) {
    const todo = createCustomElement(TodoAddComponent,
      { injector: inject });
    customElements.define('todo-element', todo);
  }
}
