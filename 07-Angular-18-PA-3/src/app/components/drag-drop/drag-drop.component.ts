import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, CdkDropListGroup],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.css'
})
export class DragDropComponent {
  todo: Task[] = [
    {id: 1, title: 'Write spec'},
    {id: 2, title: 'Design UI'},
    {id: 3, title: 'Fix bug #342'},
    {id: 4, title: 'Add unit tests'},
  ];

  done: Task[] = [
    {id: 101, title: 'Setup repo'},
    {id: 102, title: 'Initial commit'}
  ];

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
