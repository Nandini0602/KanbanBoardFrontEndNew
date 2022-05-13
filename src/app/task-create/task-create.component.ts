import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from './../task.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Task } from './../body/task.model';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  constructor(public taskService: TaskService, public route: ActivatedRoute) {}

  addTask(form: NgForm) {}

  ngOnInit(): void {}
  priorities = ['High', 'Medium', 'Low'];
  statuses = ['ToDo', 'InProgress', 'Completed'];
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
}
