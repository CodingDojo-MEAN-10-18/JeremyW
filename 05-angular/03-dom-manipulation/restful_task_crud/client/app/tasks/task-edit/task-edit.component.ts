import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css', '../tasks.css']
})
export class TaskEditComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  updateTask = new EventEmitter<Task>();

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    this.route.paramMap
      .subscribe((params) => {
        const id = params.get('id');
        this.taskService.getTask(id)
          .subscribe(task => this.task = task);
      });
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form submitted', this.task);
    console.log('form submitted', form.value);
    this.updateTask.emit(form.value);  // can either do form.value or this.task
    form.reset();
  }

}
