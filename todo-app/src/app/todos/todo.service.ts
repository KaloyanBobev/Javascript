import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  counter = 4;
  todos = [
    { id: 1, name: 'Milk', dueDate: '08/08/2020' },
    { id: 2, name: 'Beer', dueDate: '09/09/2020' },
    { id: 3, name: 'Chips', dueDate: '09/09/2020' },
  ];
  constructor() {

  }

  getAll() {
    return this.todos;
  }
  addTodo(newName: string, newDueDate: string) {

    const newId = 0;
    const newTodo = {
      id: newId + this.counter,
      name: newName,
      dueDate: newDueDate
    };

    this.counter += 1;
    this.todos.push(newTodo);
  }
}
