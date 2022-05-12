import { Injectable } from '@angular/core';
import { Task } from './../app/body/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private updatedTasks = new Subject<Task[]>();
  constructor() {}

  addTaskService(
    task_title: string,
    task_description: string,
    assignee: string,
    deadline: Date ,
    status: string,
    priority: string
  ) {
    const task: Task = {
      task_title: task_title,
      task_description: task_description,
      assignee: assignee,
      deadline: deadline ,
      status: status,
      priority: priority,
    };
    this.tasks.push(task);
    console.log('Added', task);
    this.updatedTasks.next([...this.tasks]);
  }

  getTasks() {
    return [...this.tasks];
  }

  getTaskUpdateListener() {
    return this.updatedTasks.asObservable();
  }
}
