import {
  AfterViewInit,
  Directive,
  HostListener,
  Input,
  OnDestroy,
  Optional,
} from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { UnsavedChangesService } from '../../core/services/unsaved-changes.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appUnsavedChanges]',
  standalone: true,
})
export class UnsavedChangesDirective implements AfterViewInit, OnDestroy {
  @Input('appUnsavedChanges') confirmMessage?: string;

  private sub?: Subscription;
  private trackedForm: NgForm | FormGroupDirective | null = null;

  constructor(
    private unsaved: UnsavedChangesService,
    @Optional() private ngForm?: NgForm,
    @Optional() private formGroupDir?: FormGroupDirective
  ) {
    // prefer reactive form if both present
    this.trackedForm = this.formGroupDir ?? this.ngForm ?? null;
  }

  ngAfterViewInit(): void {
    // If directive attached before injection resolution, reassign here:
    if (!this.trackedForm) {
      this.trackedForm = this.formGroupDir ?? this.ngForm ?? null;
    }

    // watch status changes for reactive form, or valueChanges
    if (this.trackedForm) {
      // Many forms update control states internally; simplest: poll the dirty flag on every status/value change
      // both NgForm and FormGroupDirective expose form
      const form = (this.trackedForm as any).form;
      if (form && form.valueChanges) {
        this.sub = form.valueChanges.subscribe(() => this.updatePendingState());
      } else {
        // fallback: single check
        setTimeout(() => this.updatePendingState(), 0);
      }
      // also update right away
      this.updatePendingState();
    } else {
      // not attached to a recognized form: still allow manual control via service (optional)
      console.warn(
        'appUnsavedChanges directive not attached to a FormGroupDirective or NgForm.'
      );
    }
  }

  private updatePendingState(): void {
    const isDirty = !!(
      this.trackedForm &&
      ((this.trackedForm as any).form?.dirty ?? false)
    );
    this.unsaved.setPending(isDirty, this.confirmMessage);
  }

  // Browser tab/window close or refresh
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: BeforeUnloadEvent) {
    const { pending, message } = this.unsaved.hasPendingChanges();
    if (pending) {
      // Standard pattern — set returnValue to show native confirmation
      event.preventDefault();
      event.returnValue = message;
      return message;
    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    // optional: clear the pending flag when directive destroyed
    this.unsaved.clear();
  }
}
