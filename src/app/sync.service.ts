import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { DatabaseService } from './database.service';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private syncDoneSubject = new Subject<void>();

  syncDone: Observable<void> = this.syncDoneSubject;

  constructor(private readonly databaseService: DatabaseService, private readonly httpClient: HttpClient) { }

  async sync() {
    const todos = await this.databaseService.todos.toArray();
    const newTodos = await this.httpClient.post<Todo[]>(`${environment.baseUrl}sync`, todos).toPromise();
    await this.databaseService.todos.bulkPut(newTodos);

    if ('setAppBadge' in navigator) {
      const allTodos = await this.databaseService.todos.toArray();
      const todoCount = allTodos.filter(({ done }) => !done).length;
      if (todoCount) {
        (navigator as any).setAppBadge(todoCount);
      } else {
        (navigator as any).clearAppBadge();
      }
    }

    this.syncDoneSubject.next();
  }
}
