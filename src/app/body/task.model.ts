export interface Task{
  id : string,
  task_title : string;
  task_description : string;
  assignee : string;
  deadline : Date;
  status : string;
  priority : string;
}
