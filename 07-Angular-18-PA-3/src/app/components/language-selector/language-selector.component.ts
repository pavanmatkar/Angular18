import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Language, LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  currentLang = signal<Language>('en'); // initialize with default

  constructor(private languageService: LanguageService) {
    // ✅ set the correct initial value from service
    this.currentLang.set(this.languageService.getLanguage());
  }

  change(lang: Language) {
    this.languageService.setLanguage(lang);
    this.currentLang.set(lang);
  }
}
