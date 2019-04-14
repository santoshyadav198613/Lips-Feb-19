import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../service/todo';
import { TodoService } from '../service/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolveGuard implements Resolve<ITodo[]>  {
  
  constructor(private todoService: TodoService) {}

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<ITodo[]>  {
    return this.todoService.getTodoList();
  }
}
