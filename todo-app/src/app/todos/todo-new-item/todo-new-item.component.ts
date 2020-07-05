import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.css']
})
export class TodoNewItemComponent implements OnInit {
  title = 'Add new Todo task';
  @Input()
  todos;

  constructor() { }

  ngOnInit(): void {
  }

}
