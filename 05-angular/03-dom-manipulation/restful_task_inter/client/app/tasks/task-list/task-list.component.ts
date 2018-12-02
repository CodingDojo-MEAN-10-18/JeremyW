import { Component, OnInit } from '@angular/core';

import { Task } from '../../models';
import { TaskService } from '../../services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css', '../tasks.css']
})
export class TaskListComponent implements OnInit {
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

  onCreate(task: Task): void {
    this.taskService.createTask(task)
      .subscribe(data => {
        console.log('creating task here', data);
        this.tasks = [...this.tasks, data];
      });
  }

  onDelete(_id: number): void{
    console.log(`deleting the id: ${_id}`);
    this.taskService.deleteTask(_id)
      .subscribe(data => {
        console.log(`removed task ${_id}`, data);
        this.tasks = this.tasks.filter(task => task._id !== data._id);
      });
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

  displayAllTasks() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
    document.querySelector('div.hide').style.display = 'flex';
  }

  getTask(task: Task): void {
    this.selectedTask = this.selectedTask === task ? null : task;
  //   if (this.selectedTask = task) {
  //     this.selectedTask = null;
  //   } else {
  //     this.selectedTask = task;
  //   }
  }

  deleteTask(_id: number): void {
    this.selectedTask = null;
    this.taskService.deleteTask(_id)
      .subscribe(data => {
      for (let index = 0; index < this.tasks.length; index++) {
        if (this.tasks[index]._id === data._id) {
        this.tasks.splice(index, 1);
        }
      }
    });
  }

  updateTask(task: Task): void {
    console.log('component got a request to update task', task);
    this.taskService.updateTask(task)
      .subscribe(data => console.log('updated task data', data));
  }

}
