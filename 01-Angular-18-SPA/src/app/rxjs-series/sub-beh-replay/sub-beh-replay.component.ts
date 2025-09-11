import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-sub-beh-replay',
  standalone: true,
  imports: [],
  templateUrl: './sub-beh-replay.component.html',
  styleUrl: './sub-beh-replay.component.css'
})
export class SubBehReplayComponent implements OnInit{

  studentName$ = new Subject();
  rollNo$ = new Subject<number>();
  takeTill = new Subject<void>();

  courseName$: Subject<string> = new Subject<string>(); 

  // we cannot initialize subject with default value but behaviour subject can be initialized with default value
  // initSubject = new Subject("ABC"); //not possible, gives error

  deptSrv = inject(DepartmentService)

  constructor(){
    setTimeout(()=>{
      this.studentName$.next("Angular 20")
      this.rollNo$.next(1234)
      this.takeTill.next()
      this.deptSrv.courseDuration$.next("3 months + 1 week")
    },4000)
  }

  ngOnInit(): void {
    this.deptSrv.courseDuration$.subscribe((res:any)=>{
      debugger;
    })
    this.studentName$.subscribe((res:any)=>{
      debugger;
    })
    this.rollNo$.subscribe((res:number)=>{
      debugger;
    })
  }

}
