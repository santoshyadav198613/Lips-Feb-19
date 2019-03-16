import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todo';
import { Observable } from 'rxjs';
import { rendererTypeName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addTodo(todo: ITodo) {
    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos',
      todo);
  }
}
