import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule, TodoItemComponent],
  template: `
    <mat-list>
      <app-todo-item *ngFor="let todo of todos" [todo]="todo" (delete)="deleteTodo.emit(todo.id)"></app-todo-item>
    </mat-list>
  `,
  styles: [
    `
      mat-list {
        width: 100%;
      }
    `,
  ],
})
export class TodoListComponent {
  @Input() todos: { id: number; title: string; completed: boolean }[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
}
