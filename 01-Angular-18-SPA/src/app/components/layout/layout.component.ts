import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  selectedRole: string = '';
  router = inject(Router);
  loggedUserData: any;
  deptSrv = inject(DepartmentService);

  constructor(private deptService: DepartmentService){

  }

  logoff(){
    localStorage.removeItem('loginUser')
    this.router.navigateByUrl('login');
  }
  onRoleChange(role: string){
    debugger;
    this.deptService.onRoleChange$.next(role)
    // this.deptService.role$.next(role)
  }
  onRoleChange2(event:any){
    debugger;
    this.deptSrv.roleBehaviour$.next(event.target.value)
    this.deptSrv.roleSub$.next(event.target.value)
  }
}
