import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UnsavedChangesService } from '../../core/services/unsaved-changes.service';
import { CommonModule } from '@angular/common';
import { UnsavedChangesDirective } from '../../shared/directives/unsaved-changes.directive';

@Component({
  selector: 'app-profile1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UnsavedChangesDirective],
  templateUrl: './profile1.component.html',
  styleUrl: './profile1.component.css',
})
export class Profile1Component {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private unsaved: UnsavedChangesService) {}

  save() {
    // pretend save -> then clear pending changes
    // save to server...
    this.form.markAsPristine();
    this.unsaved.clear();
    alert('Saved!');
  }

  discard() {
    this.form.reset();
    this.unsaved.clear();
  }

  // optional: component-level canDeactivate (guard will call this first)
  canDeactivate(): boolean {
    const { pending } = this.unsaved.hasPendingChanges();
    if (!pending) return true;
    return confirm('You have unsaved changes in this form. Leave anyway?');
  }
}
