import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../service/todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {

  @Input() todoList: ITodo[] = [];
  constructor() { }

  ngOnInit() {
  }

}
