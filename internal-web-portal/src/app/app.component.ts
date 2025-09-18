import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ClickComponent } from './click/click.component';
import { Question9Component } from './question9/question9.component';
import { Question10Component } from './question10/question10.component';
import { Question11Component } from './question11/question11.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Question11Component,
    Question10Component,
    Question9Component,
    ClickComponent,
    ToggleComponent,
    NgifComponent,
    NgforComponent,
    RouterOutlet,
    NavbarComponent,
    UserDetailsComponent,
    NgmodelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'internal-web-portal';
}
