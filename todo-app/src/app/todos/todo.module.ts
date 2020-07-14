import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoNewItemComponent } from './todo-new-item/todo-new-item.component';

@NgModule({
  declarations: [TodoComponent,
    TodoListComponent,
    TodoNewItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
