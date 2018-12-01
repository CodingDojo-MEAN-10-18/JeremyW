import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
    console.log('getting the tasks', this.taskService);
  }

  onSelect(task: Task): void {
    console.log('selected task', task);
    this.selectedTask = this.selectedTask === task ? null : task;
  }

  onEvent(event: Event): void {
    console.log('eventing');
    event.stopPropagation();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        console.log('these tasks are back from subscription', tasks);
      });
  }

  getTask(task: Task): void {
    this.selectedTask = this.selectedTask === task ? null : task;
  //   if (this.selectedTask = task) {
  //     this.selectedTask = null;
  //   } else {
  //     this.selectedTask = task;
  //   }
  }
}
