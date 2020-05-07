import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  input: string = "";

  todos = ['Eat', 'Drink', 'Code'];

  constructor() { }

  ngOnInit(): void { }

  onKey(event: any) {
    this.input = event.target.value;
  }

  saveTodo() {
    this.todos.push(this.input);
  }

  deleteTodo(todo: string) {
    this.todos = this.todos.filter(existingTodo => existingTodo !== todo);
  }


}
