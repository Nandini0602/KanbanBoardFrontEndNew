import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from 'src/app/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  Tasks: Task[] = [];
  private tasksSub: Subscription | undefined;

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.Tasks = this.taskService.getTasks();
    console.log(this.Tasks);
    this.tasksSub = this.taskService
      .getTaskUpdateListener()
      .subscribe((Tasks: Task[]) => {
        this.Tasks = Tasks;
      });
  }
  ngOnDestroy(): void {
    this.tasksSub?.unsubscribe();
  }
}
