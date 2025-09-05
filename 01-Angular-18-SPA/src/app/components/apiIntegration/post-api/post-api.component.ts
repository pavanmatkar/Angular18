import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusableComponent/my-button/my-button.component';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../../../service/department.service';
import { Department, IDepartmentList } from '../../../model/class/Customer';

@Component({
  selector: 'app-post-api',
  standalone: true,
  // FormsModule is needed to be imported to use ngModel
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  
  deptObj: Department = new Department();
  deptList: IDepartmentList[]=[];

getData(data: any){
  debugger;
}
  // this is parameter decorator
  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService) {
    const result = this.deptSrv.addTwoNo(23, 56);
    debugger;
  }
  // use mock apis from chatgpt for practice
  onDelete(id: number) {
    debugger;
    const isDelete = confirm('Are you sure want to delete');
    if (isDelete) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
            id
        )
        .subscribe((res: any) => {
          debugger;
          if (res.result) {
            alert('Department Deleted Success');
            this.getDepartment();
          } else {
            alert(res.message);
          }
        });
    }
  }

  // onSave(){
  //   debugger;
  //   this.http.post("https://fakerestapi.azurewebsites.net/api/v1/Activities", this.deptObj).subscribe((res:any)=>{
  //     debugger;
  //     if (res.completed) {
  //       alert("Department Created Success")
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }

  onSave() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Created Success');
        this.getDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  getDepartment() {
    debugger;
    this.deptSrv.getAllDept().subscribe((res: any) => {
      debugger;
      this.deptObj = res;
    });
  }
}
/*
Great catch! 👀 In Angular 18, HttpClientModule is now deprecated because Angular moved to a standalone APIs model. That’s why you’re seeing this issue.
Instead of importing HttpClientModule, you should use the provideHttpClient() function.
in "app.config.ts"
*/ 