import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core'; 

@Component({
  selector: 'app-data-binding',
  standalone: true,
  // for ngModel (two way data binding) we need to import FormsModule
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

// string, number, boolean, date

courseName: string = "Angular18";
stateName: string = "Goa";
inputType = "radio";
myClassName: string = "bg-primary"
rollNumber: number = 123;
isIndian: boolean = true;
currentDate: Date = new Date();
// this is the example of signal
firstName = signal("Chetan Jogi");

constructor(){
  
}

changeCourseName(){
  this.courseName = "ReactJS";
  // to change the value of signal we have to use .set method
  this.firstName.set("Sachin Tendulkar")
}
showAlert(message: string){
  alert(message)
}

}
