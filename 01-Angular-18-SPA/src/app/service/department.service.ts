import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';
import { MasterService } from './master/master.service';
import { Department } from '../model/class/Customer';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  courseDuration$ = new BehaviorSubject<string>('2 Months');
  roleBehaviour$ = new BehaviorSubject<string>('');
  roleSub$ = new Subject<string>();

  private userDetails = new Map<number, Observable<any>>();
  http = inject(HttpClient);

  // subject ke naam me '$' dala karo
  public onRoleChange$: Subject<string> = new Subject<string>();
  // public role$ : BehaviorSubject<string> = new Subject<string>();

  constructor(private master: MasterService) {}

  // getUserById(id: number){
  //   return this.http.get("https://jsonplaceholder.typicode.com/users/" +id);
  // }

  getUserById(id: number):any | undefined {
    if (!this.userDetails.has(id)) {
      const userDataObs = this.http
        .get('https://jsonplaceholder.typicode.com/users/' + id)
        .pipe(shareReplay(1));
      this.userDetails.set(id, userDataObs);
    }
    return this.userDetails.get(id);
  }

  getAllDept(): Observable<Department[]> {
    debugger;
    // this is concatenation
    return this.master.get<Department[]>(
      Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT
    );
  }

  saveNewDept(obj: any) {
    // this is template literal
    return this.master.post(
      `${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,
      obj
    );
  }
  addTwoNo(num1: number, num2: number) {
    debugger;
    return num1 + num2;
  }
}
