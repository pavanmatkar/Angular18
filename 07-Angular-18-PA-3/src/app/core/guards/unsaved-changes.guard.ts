import { CanDeactivateFn } from '@angular/router';
import { UnsavedFormComponent } from '../../components/unsaved-form/unsaved-form.component';

export const unsavedChangesGuard: CanDeactivateFn<UnsavedFormComponent> = 
(component, currentRoute, currentState, nextState) => {
  if (component.hasUnsavedChanges()){
    return confirm('You have unsaved changes. Do you really want to leave this page?');
  }
  return true;
};
