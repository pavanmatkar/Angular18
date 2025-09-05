import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  firstName: string;

  // constructor is used for variable initialization and subscribe
  // api call constructor me kar sakte hai kya? => nahi
  // api call hame ideally ngOninit lifecycle hook me hi karna hai
  constructor(){
    console.log("constructor");
    this.firstName = "";
  }
  // used where reusable components present
  // mostly used
  ngOnChanges(){
    console.log("ngOnChanges");
    
  }
  // mostly used
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  // mostly used
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  } 
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  } 
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  } 
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  } 
  // mostly used
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
