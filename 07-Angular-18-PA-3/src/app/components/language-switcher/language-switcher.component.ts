import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  lang: 'en' | 'hi' = 'en';
  constructor(private i18n: TranslationService) {
    this.i18n.lang$.subscribe(l => this.lang = l);
  }
  set(lang: 'en' | 'hi') {
    this.i18n.setLang(lang);
  }
}
