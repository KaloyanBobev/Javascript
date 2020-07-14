import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    { id: 1, name: 'Milk', dueDate: '2020-08-21', done: true },
    { id: 2, name: 'Beer', dueDate: '2020-08-21', done: false },
    { id: 3, name: 'Chips', dueDate: '2020-08-21', done: false },
  ];
  constructor() {

  }


  getAll() {
    return this.todos;
  }
  addTodo(newName: string, newDueDate: string) {
    let newId = this.todos.length + 1;
    const newTodo = {
      id: newId,
      name: newName,
      dueDate: newDueDate,
      done: false
    };

    this.todos.push(newTodo);
  }

}
