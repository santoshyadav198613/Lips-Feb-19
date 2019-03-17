import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../service/todo';
import { } from 'protractor';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInfoComponent implements OnInit {

  @Output() selectedTask: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() removeTask: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Input() todoList: ITodo[] = [];
  constructor() { }

  ngOnInit() {
  }

  editTask(task: ITodo) {
    this.selectedTask.emit(task);
  }

  deleteTask(task: ITodo) {
    this.removeTask.emit(task);
  }

}
