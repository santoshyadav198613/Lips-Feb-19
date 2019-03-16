import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { ITodo } from './service/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  list: ITodo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().subscribe((data) => this.list = data);
  }

}
