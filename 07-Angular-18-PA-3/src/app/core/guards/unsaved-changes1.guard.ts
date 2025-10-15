import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { UnsavedChangesService } from '../services/unsaved-changes.service';

export const unsavedChanges1Guard: CanDeactivateFn<unknown> = (
  component, 
  currentRoute, 
  currentState, 
  nextState
) => {
  
  const unsavedService = inject(UnsavedChangesService);
  const { pending, message } = unsavedService.hasPendingChanges();

  // optional: if component has its own canDeactivate() method
  if (component && typeof (component as any).canDeactivate === 'function') {
    const result = (component as any).canDeactivate();
    if (result === false) return false;
  }

  // if no unsaved changes, allow navigation
  if (!pending) return true;

  // show a confirmation dialog
  return window.confirm(message);

};
