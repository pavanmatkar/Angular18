import { HttpClient } from '@angular/common/http';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployeeComponent implements OnInit {

  http = inject(HttpClient);
  // userList: any []=[];
  name: string = 'Html';

  userList = signal<any[]>([]);
  isApi = signal (false);

  constructor(private cdRef:ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.isApi.set(true);
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList.set(res);
      this.name = "JAVA";
      this.isApi.set(false)
    })
  }
  

}
