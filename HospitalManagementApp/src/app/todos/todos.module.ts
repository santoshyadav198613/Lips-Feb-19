import { NgModule } from '@angular/core';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TodosComponent,
    TodoInfoComponent,
    TodoAddComponent,
  ],
  imports: [
    SharedModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
