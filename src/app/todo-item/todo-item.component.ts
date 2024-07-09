import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatListModule],
  template: `
    <mat-list-item class="todo-item">
      <mat-checkbox [(ngModel)]="todo.completed"></mat-checkbox>
      <span [class.completed]="todo.completed">{{ todo.title }}</span>
      <button mat-icon-button color="warn" (click)="deleteTodo()">
        <mat-icon>delete</mat-icon>
      </button>
    </mat-list-item>
  `,
  styles: [
    `
      .todo-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      mat-checkbox {
        margin-right: 10px;
      }
      .completed {
        text-decoration: line-through;
        color: rgba(0, 0, 0, 0.5);
      }
    `,
  ],
})
export class TodoItemComponent {
  @Input() todo: { id: number; title: string; completed: boolean } = { id: 0, title: '', completed: false };
  @Output() delete = new EventEmitter<void>();

  deleteTodo() {
    this.delete.emit();
  }
}
