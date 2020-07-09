import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.css']
})
export class TodoNewItemComponent implements OnInit {
  title = 'Add new todo task';

  todos;

  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
  }

  addNewItem(newName: string, newDueDate: string) {
    this.todos = this.TodoService.addTodo(newName, newDueDate);
  }

}
