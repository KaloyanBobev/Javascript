import { TodoService } from './../todo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo;
  TodoService: any;

  constructor(TodoService: TodoService) { }

  ngOnInit() {
  }
  changeCheck() {
    if (this.todo.done) {

      this.todo.done = false;
    } else {
      this.todo.done = true;
    }
  }

}