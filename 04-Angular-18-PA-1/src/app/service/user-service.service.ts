import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  private listOfEmployees: any[] =[
  {empId: 11, name: 'AAA', city: 'Pune', salary: "10k"},
  {empId: 22, name: 'BBB', city: 'Mumbai', salary: "11k"},
  {empId: 33, name: 'CCC', city: 'Jalgaon', salary: "12k"}, 
  {empId: 44, name: 'DDD', city: 'Mumbai', salary: "13k"},
  {empId: 55, name: 'EEE', city: 'Nagpur', salary: "14k"},
  {empId: 66, name: 'FFF', city: 'Thane', salary: "15k"}
]

// method to return employee list
getEmployees(){
  return this.listOfEmployees;
}

userData: any = {
  name: "Pavan",
  surname: "Matkar",
  location: "Malkapur",
  profile: "Angular18"
};

getUserData(){
  return this.userData;
}

}
