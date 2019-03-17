import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './service/todo.service';
import { ITodo } from './service/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  listSubscription: Subscription;
  list: ITodo[] = [];
  task: ITodo = {
    id: 0,
    userId: 0,
    title: '',
    completed: false
  };

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTask();
  }

  loadTask() {
    this.listSubscription = this.todoService.getTodoList().subscribe((data) => this.list = data);
  }

  addTodo(todo: ITodo) {
    this.todoService.addTodo(todo).subscribe((data) => {
      console.log('Task added')
      console.log(data)
      this.loadTask();
    }, (err) => console.log(err))
  }

  currentTask(task: ITodo) {
    this.task = task;
  }

  updateTask(task: ITodo) {
    this.todoService.updateTodo(task).subscribe((data) => this.loadTask(),
      (err) => console.log(err));
  }

  deleteTask(task: ITodo) {
    this.todoService.deleteTodo(task).subscribe((data) => this.loadTask(),
      (err) => console.log(err));
  }

  ngOnDestroy() {
    this.listSubscription
      ? this.listSubscription.unsubscribe()
      : this.noop();
  }

  noop() {

  }

}
