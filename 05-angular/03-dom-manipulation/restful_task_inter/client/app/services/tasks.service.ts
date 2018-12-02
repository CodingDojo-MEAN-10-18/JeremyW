import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private base = '/api/tasks';

  tasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    this.http.get<Task[]>(`${this.base}`)
      .subscribe(data => this.tasks$.next(data));
      console.log('got these tasks!', this.tasks$);
      return this.tasks$;
  }

  getTask(_id: string): Observable<Task> {
    console.log('task service got a request to edit a task', _id);
    return this.http.get<Task>(`${this.base}/${_id}`);
  }

  createTask(task: Task): Observable<Task> {
    console.log('task service got a request to create a task', task);
    return this.http.post<Task>('/api/tasks', task);
  }

  deleteTask(_id: number): Observable<Task> {
    console.log('task service got the request to delete task', _id);
    return this.http.delete<Task>(`/api/tasks/${_id}`);
  }

  updateTask(task: Task): Observable<Task> {
    console.log('task service got the request to update the task', task);
    return this.http.put<Task>(`/api/tasks/${task._id}`, task);
  }
}
