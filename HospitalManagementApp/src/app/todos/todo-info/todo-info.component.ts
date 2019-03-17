import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '../service/todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInfoComponent implements OnInit {

  @Input() todoList: ITodo[] = [];
  constructor() { }

  ngOnInit() {
  }

}
