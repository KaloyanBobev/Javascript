import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';

import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoComponent,
    TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
  ],
  providers: [TodoService]
})
export class TodoModule { }