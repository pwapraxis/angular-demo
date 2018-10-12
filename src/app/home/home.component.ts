import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';
import * as uuidV4 from 'uuid/v4';
import { Todo } from '../todo';
import { MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Todo[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.updateTodos();
  }

  async updateTodos() {
    this.todos = await this.databaseService.todos.toArray();
  }

  async addTodo(title: string) {
    await this.databaseService.todos.add({ id: uuidV4(), title, done: false });
    this.updateTodos();
  }

  async toggleTodo(event: MatSelectionListChange) {
    const todo = event.option.value;
    todo.done = !todo.done;
    await this.databaseService.todos.put(todo);
  }
}
