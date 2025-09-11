import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { MasterService } from '../../service/master/master.service';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-operator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.css',
})
export class RxjsOperatorComponent {
  noList$ = from([11, 12, 13, 14, 15, 16, 17, 18, 20]);

  rollNoList = of([11, 12, 13, 14, 15, 16, 17, 18, 20]);

  timeInterval = interval(1000)

  masterService = inject(MasterService);

  searchControl = new FormControl();

  constructor() {
    this.noList$.subscribe((res: number) => {
      // console.log(res);
    });

    this.noList$
      .pipe(filter((num) => num % 2 == 0))
      .subscribe((res: number) => {
        // console.log(res);
      });

    this.rollNoList.subscribe((res) => {
      // console.log(res);
    });

    this.rollNoList
      .pipe(map((result) => result.filter((m) => m % 2 == 0)))
      .subscribe((result) => {
        // console.log(result);
      });

    this.masterService.getJsonUser().subscribe((res:any)=>{
      // console.log(res);
    });

    this.masterService.getSingleUser().subscribe((res:any)=>{
      // console.log(res);
    })

    this.timeInterval.pipe(
      filter(num=> num % 2 == 0)
    ).subscribe((res:number)=>{
      // console.log(res);
    })

    this.timeInterval.pipe(
      take(6)
    ).subscribe((res:number)=>{
      console.log(res);
    })

    this.searchControl.valueChanges.pipe(
      filter(searchText => searchText.length >= 3)
    ).subscribe((res:any)=>{
      // console.log(res);
    })

  }
}
