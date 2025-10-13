import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastService } from './core/services/toast.service';
import { ToastComponent } from './components/toast/toast.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    ToastComponent,
    CommonModule,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Start with both views hidden
        query(
          ':enter, :leave',
          [style({ position: 'absolute', width: '100%', opacity: 0 })],
          { optional: true }
        ),

        group([
          query(':leave', [animate('400ms ease', style({ opacity: 0 }))], {
            optional: true,
          }),
          query(':enter', [animate('400ms ease', style({ opacity: 1 }))], {
            optional: true,
          }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor(private toastService: ToastService) {}
  title = '07-Angular-18-PA-3';

  save() {
    // simulate save action
    console.log('Data saved!');
    this.toastService.show('✅ Saved Successfully!', 3000);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
