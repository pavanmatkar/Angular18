import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  // FormsModule is needed to be imported to use NgModel
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

div1Visible: boolean = true;
isWarningDivVisible: boolean = false;
num1: string = '';
num2: string = '';
selectedStatus: string = '';

constructor(private deptService: DepartmentService){
  this.deptService.onRoleChange$.subscribe((res:string)=>{
    debugger;
  })
}

showDiv1(){
  this.div1Visible = true;
}
hideDiv1(){
  this.div1Visible = false;
}
toggleDiv2(){
  this.isWarningDivVisible = !this.isWarningDivVisible;
}

}

