import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    TodoListComponent,
    AddTodoComponent,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Todo App</span>
    </mat-toolbar>
    <div class="container">
      <mat-card class="card add-todo-card">
        <app-add-todo (newTodo)="addTodoHandler($event)"></app-add-todo>
      </mat-card>
      <mat-card class="card todo-list-card">
        <app-todo-list [todos]="todos" (deleteTodo)="deleteTodoHandler($event)"></app-todo-list>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
      }
      .card {
        margin-bottom: 20px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .card:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
      .add-todo-card {
        background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
        color: #fff;
      }
      .todo-list-card {
        background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
        color: #fff;
      }
      mat-toolbar {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      mat-toolbar span {
        font-size: 24px;
        font-weight: bold;
      }
      .container h1 {
        text-align: center;
        margin-bottom: 20px;
      }
      mat-card:last-child {
        margin-bottom: 0;
      }
    `,
  ],
})
export class TodoComponent {
  todos: { id: number; title: string; completed: boolean }[] = [];

  addTodoHandler(newTodo: { title: string }) {
    const newId = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
    this.todos.push({ id: newId, title: newTodo.title, completed: false });
  }

  deleteTodoHandler(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }
}
