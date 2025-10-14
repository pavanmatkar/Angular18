import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css',
})
export class Home1Component {
  greeting = computed(() => ''); // temporary placeholder
  constructor(private langService: LanguageService) {
    // ✅ initialize the reactive greeting after service is available
    this.greeting = computed(() => {
      return this.langService.getLanguage() === 'en'
        ? 'Hello, User!'
        : 'नमस्ते, उपयोगकर्ता!';
    }); 
  }
}
