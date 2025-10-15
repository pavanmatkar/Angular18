import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Lang = 'en' | 'hi';

const TRANSLATIONS = {
  en: {
    APP_TITLE: 'My App',
    WELCOME: 'Welcome, {{name}}!',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
    BIRTHDAY: 'Birthdate',
  },
  hi: {
    APP_TITLE: 'मेरा ऐप',
    WELCOME: 'स्वागत है, {{name}}!',
    LOGIN: 'लॉगिन',
    LOGOUT: 'लॉगआउट',
    BIRTHDAY: 'जन्म तिथि',
  },
} as const;

@Injectable({providedIn: 'root'})
export class TranslationService {

  private _lang$ = new BehaviorSubject<Lang>('en');
  lang$ = this._lang$.asObservable();

  get currentLang(): Lang {
    return this._lang$.value;
  }

  setLang(lang: Lang) {
    this._lang$.next(lang);
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const dict = TRANSLATIONS[this.currentLang] as Record<string, string>;
    let text = dict[key] ?? key;
    if (params) {
      for (const p in params) {
        text = text.replace(`{{${p}}}`, String(params[p]));
      }
    }
    return text;
  }

}
