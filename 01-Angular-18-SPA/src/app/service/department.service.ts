import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MasterService } from './master/master.service';
import { Department } from '../model/class/Customer';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  // subject ke naam me '$' dala karo
  public onRoleChange$ : Subject<string> = new Subject<string>;
  // public role$ : BehaviorSubject<string> = new Subject<string>();

  constructor(private master: MasterService) { }

  getAllDept():Observable<Department[]>{
    debugger;
    // this is concatenation
    return this.master.get<Department[]>(Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT);
  }

  saveNewDept(obj: any){
    // this is template literal
    return this.master.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`, obj)
  }
  addTwoNo(num1: number, num2: number){
    debugger;
    return num1 + num2;
  }
}
