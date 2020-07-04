import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    { id: 1, name: 'Milk', done: false, dueDate: '08/08/2020' },
    { id: 2, name: 'Beer', done: false, dueDate: '09/09/2020' },
    { id: 3, name: 'Chips', done: false, dueDate: '09/09/2020' },
  ];
  constructor() { }

  getAll() {
    return this.todos;
  }
}
