import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UnsavedChangesService {

  private _hasChanges = false;
  private _message = 'You have unsaved changes. Are you sure you want to leave?';

  setPending(hasChanges: boolean, message?: string) {
    this._hasChanges = hasChanges;
    if (message) this._message = message;
  }

  hasPendingChanges(): { pending: boolean; message: string } {
    return { pending: this._hasChanges, message: this._message };
  }

  clear() {
    this._hasChanges = false;
  }
  
}
