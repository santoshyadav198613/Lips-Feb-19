import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
    TodoInfoComponent,
    TodoAddComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }
