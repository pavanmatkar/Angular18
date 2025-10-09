import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from "@angular/common";
import { ThemeToogleComponent } from "../theme-toogle/theme-toogle.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTask: string = '';
  tasks = [
    {name: 'Buy groceries', editing: false},
    {name: 'Clean the house', editing: false},
    {name: 'Pay bills', editing: false}
  ];

  addTask(){
    if(this.newTask.trim() !== ''){
      this.tasks.push({name: this.newTask, editing: false});
      this.newTask = '';
    }
  }

  editTask(task: any){
    task.editing = true;
  }

  saveTask(task: any){
    task.editing = false;
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }
}
