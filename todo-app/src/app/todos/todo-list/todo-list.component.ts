import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'Todo list';
  todos;

  constructor(private TodoService: TodoService) { }

  ngOnInit() {
    this.todos = this.TodoService.getAll();
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(x => x.name !== todo.name);
  }
}
