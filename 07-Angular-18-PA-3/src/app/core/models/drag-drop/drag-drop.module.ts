import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from '../../../components/drag-drop/drag-drop.component';
import { DragDropModule as CdkDragDropModule } from '@angular/cdk/drag-drop';  


@NgModule({
  imports: [
    CommonModule,
    CdkDragDropModule,
    DragDropComponent
  ],
  exports: [DragDropComponent]  // export so AppModule can use it
})
export class DragDropModule { }   
