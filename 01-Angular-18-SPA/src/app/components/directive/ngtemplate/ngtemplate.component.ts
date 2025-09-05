import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  // to use *ngIf we need to import CommonModule
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {

  isUserLoggedIn: boolean = false;
  loggedUserName: string = 'Chetan';

  @ViewChild('dyamicTem') dyanTemplate : TemplateRef<any> | undefined;
  @ViewChild('dyamicContainer', {read:ViewContainerRef}) dyanContainer : ViewContainerRef | undefined;

  loadTemplate(){
    if (this.dyanTemplate){
      this.dyanContainer?.createEmbeddedView(this.dyanTemplate)
    }
  }
}
