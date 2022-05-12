import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BodyComponent } from './body/body.component';
import { TodoComponent } from './body/todo/todo.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { InprogressComponent } from './body/inprogress/inprogress.component';
import { CompletedComponent } from './body/completed/completed.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './body/task/task.component';
import { TaskService } from 'src/app/task.service';
import{HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    BodyComponent,
    TodoComponent,
    InprogressComponent,
    CompletedComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
