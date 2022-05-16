import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from './../task.service';
import { Task } from './../body/task.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  constructor(public taskService: TaskService, public route: ActivatedRoute) {}

  addTask(form: NgForm) {}


  priorities = ['High', 'Medium', 'Low'];
  statuses = ['ToDo', 'InProgress', 'Completed'];
  private mode = 'create';
  private taskId!: string;
  task!: Task;
  submitForm(taskForm: NgForm) {
    // addTask function directly written in the submit form
    // when the form will be submitted it will automatically add the details
    this.taskService.addTaskService(
      taskForm.value.task_title,
      taskForm.value.task_description,
      taskForm.value.assignee,
      taskForm.value.deadline,
      taskForm.value.status,
      taskForm.value.priority,
    );
    taskForm.resetForm();
    // console.log(taskForm.value);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      console.log("parammap is", paramMap);
      if(paramMap.has('taskId')){
        this.mode = 'edit';
        this.taskId = paramMap.get('taskId')!;
        console.log("Task ID", this.taskId);
        this.task = this.taskService.getTask(this.taskId)!;
      //Post | undefined = Post | undefined
      // number = string
        console.log("Got the Task", this.task);
      }
      else {
        this.mode ='create';
        this.taskId = null!;
        console.log("not in edit");
      }
    })
  }
}

