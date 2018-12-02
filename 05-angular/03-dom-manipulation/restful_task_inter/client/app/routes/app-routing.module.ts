import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromTasks from '../tasks';
import { TaskListComponent } from '../tasks';

const routes: Routes = [
  {
    path: '',
    // component: fromTasks.TaskListComponent,
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    children: [
      {
        path: '',
        component: fromTasks.TaskListComponent,
      },
      {
        path: ':id',
        component: fromTasks.TaskDetailComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
