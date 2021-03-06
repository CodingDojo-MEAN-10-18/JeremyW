import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Injectable()
export class TaskResolve implements Resolve<Task> {

  constructor(private taskService: TaskService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Task> {
    return this.taskService.getTask(route.paramMap.get('id'));
  }
}
