import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  template: `
    <form (submit)="onSubmit()">
      <mat-form-field appearance="outline">
        <input matInput type="text" [(ngModel)]="newTodoTitle" name="title" placeholder="Add new todo" required>
      </mat-form-field>
      <button mat-raised-button color="accent" type="submit">Add Todo</button>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      mat-form-field {
        flex: 1;
      }
    `,
  ],
})
export class AddTodoComponent {
  newTodoTitle: string = '';
  @Output() newTodo = new EventEmitter<{ title: string }>();

  onSubmit() {
    if (this.newTodoTitle.trim()) {
      this.newTodo.emit({ title: this.newTodoTitle });
      this.newTodoTitle = '';
    }
  }
}
