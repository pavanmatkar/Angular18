import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    ModalComponent,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
