import { Component, ViewChild } from '@angular/core';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-app-parent',
  standalone: true,
  imports: [FeedbackFormComponent, MatButtonModule],
  templateUrl: './app-parent.component.html',
  styleUrl: './app-parent.component.css'
})
export class AppParentComponent {
  @ViewChild(FeedbackFormComponent) feedbackFormComp!: FeedbackFormComponent;

  clearForm(){
    this.feedbackFormComp.resetForm()
  }
}
