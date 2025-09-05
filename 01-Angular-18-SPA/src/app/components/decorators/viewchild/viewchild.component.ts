import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {
  // ? => denotes optional
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  /*ngAfterViewInit() ko ViewChild ke saath use karte hai*/ 
  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value
    debugger;
    const alertMode = this.alertComp?.alertMode;
  }
}

/*
___decorators___
Class Decorators => component, injectable, pipe, directive, module  
Property Decorators => Input, Output, hostBinding
Method Decorators => hostListner
Parameter Decorators => inject
*/ 
