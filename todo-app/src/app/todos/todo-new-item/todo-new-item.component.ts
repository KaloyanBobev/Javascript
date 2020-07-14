import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { TodoService } from './../todo.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.css']
})
export class TodoNewItemComponent implements OnInit {
  title = 'Add new todo task';
  @Input()
  _newName: string;
  @Input()
  _newDate: string;

  todos;

  constructor(private TodoService: TodoService) { }

  get newName(): string {
    return this._newName;
  }
  set newName(value: string) {
    if (value.length < 2) {
      throw new Error('The task name is short');
    }
    this._newName = value;
  }

  get newDate(): string {
    return this._newDate;
  }

  set newDate(value: string) {
    if (!value) {
      throw new Error('Enter valid date');
    }
    this._newDate = value;
  }

  ngOnInit(): void {
  }

  addNewItem() {
    const newName = this._newName;
    const newDate = this._newDate;
    this.todos = this.TodoService.addTodo(newName, newDate);
  }

}
