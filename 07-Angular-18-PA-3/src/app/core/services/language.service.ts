import { computed, Injectable, signal } from '@angular/core';

export type Language = 'en' | 'hi';

@Injectable({providedIn: 'root'})
export class LanguageService {

   // reactive signal to track current language
  private currentLang = signal<Language>(this.loadLanguage());

  // expose language as readonly signal
  lang$ = computed(() => this.currentLang());

  constructor() {}

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('userLang', lang); // persist
  }

  getLanguage(): Language {
    return this.currentLang();
  }

  private loadLanguage(): Language {
    const saved = localStorage.getItem('userLang') as Language;
    return saved ?? 'en'; // default to English
  }

}
