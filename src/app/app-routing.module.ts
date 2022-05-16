import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './body/task/task.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path:'', component: TaskComponent },
  { path:'createtask', component: TaskCreateComponent },
  { path:'edittask/:taskId', component:TaskCreateComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
