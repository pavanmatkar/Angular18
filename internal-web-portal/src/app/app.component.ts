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
import { Question12Component } from './question12/question12.component';
import { Question13Component } from './question13/question13.component';
import { Question14Component } from './question14/question14.component';
import { Question16Component } from './question16/question16.component';
import { Question15Component } from './question15/question15.component';
import { Question17Component } from './question17/question17.component';
import { Question18Component } from './question18/question18.component';
import { Question20Component } from './question20/question20.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Question20Component,
    Question18Component,
    Question17Component,
    Question16Component,
    Question15Component,
    Question14Component,
    Question13Component,
    Question12Component,
    Question11Component,
    Question10Component,
    Question9Component,
    ClickComponent,
    ToggleComponent,
    NgifComponent,
    NgforComponent,
    NavbarComponent,
    UserDetailsComponent,
    NgmodelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'internal-web-portal';
}
