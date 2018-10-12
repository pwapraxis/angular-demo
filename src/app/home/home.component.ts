import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';
import * as uuidV4 from 'uuid/v4';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  addTodo(title: string) {
    this.databaseService.todos.add({ id: uuidV4(), title, done: false });
  }

}
