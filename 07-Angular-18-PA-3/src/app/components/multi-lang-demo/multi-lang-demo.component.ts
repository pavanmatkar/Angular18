import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';


@Component({
  selector: 'app-multi-lang-demo',
  standalone: true,
  imports: [TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './multi-lang-demo.component.html',
  styleUrl: './multi-lang-demo.component.css'
})
export class MultiLangDemoComponent {}
