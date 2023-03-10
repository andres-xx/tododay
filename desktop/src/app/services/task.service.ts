import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environements/environement';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient,
              private datePipe: DatePipe) { }
  private url : string = environment.url;
  
  tasks: Task[] = [];
  taskFormGroup!: FormGroup;

  getDate(): Date{
    return new Date();
  }

  getDatePiped(){
    return this.datePipe.transform(this.getDate(), "yyyy-MM-dd");
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'task')
  }

  getAllTasksByDay(date: String | null): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'task/' + date)
  }

  addTask(task: Task): Observable<Task[]> {
    return this.http.post<Task[]>(this.url + 'task', task)
  }

  setTaskFormGroup(taskFormGroup: FormGroup) {
    this.taskFormGroup = taskFormGroup;
  }

  getTaskFormGroup() {
    return this.taskFormGroup;
  }

}

