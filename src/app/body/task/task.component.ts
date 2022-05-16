import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from 'src/app/task.service';
import { Subscription } from 'rxjs';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  /*todo = ['Welcome to Kanban Board You can create task by create task button', ''];
  progress = ['Completed task stored here',''];
  done = ['Completed task stored here',''];*/

  /*drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }*/
  Tasks: Task[] = [];
  private tasksSub: Subscription | undefined;

  panelOpenState = false;
  constructor(public taskService: TaskService) {}

  ngOnInit(): void{
    this.taskService.getTasks();
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
  onDelete(taskId: string | undefined){
    this.taskService.deleteTask(taskId);
  }
}
