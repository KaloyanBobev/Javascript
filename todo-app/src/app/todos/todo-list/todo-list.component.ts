import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos = [
    { id: 1, name: 'Milk', dueDate: '08/08/2020' },
    { id: 2, name: 'Beer', dueDate: '09/09/2020' },
    { id: 3, name: 'Chips', dueDate: '09/09/2020' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(x => x.name !== todo.name);
  }
}
