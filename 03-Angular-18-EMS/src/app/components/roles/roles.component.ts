import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {
// string, number, boolean, date, object, array, null, undefined
firstName: string = "Angular Tutorial";
angularVersion = "Angular 18";

version: number = 18;

isActive: boolean = false;

currentDate: Date = new Date();

}
