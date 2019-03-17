import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../service/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  pattern = "^[a-zA-Z0-9]+$";
  @Output() addTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  todo: ITodo = {
    id: 0,
    userId: 0,
    title: '',
    completed: false
  };

  constructor() {

  }

  ngOnInit() {

  }

  addTask() {
    this.addTodo.emit(this.todo);
  }
}
