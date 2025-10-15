import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false, // so it auto-updates when language changes
})
export class TranslatePipe implements PipeTransform {

  constructor(private i18n: TranslationService) {}
  transform(key: string, params?: Record<string, string | number>) {
    return this.i18n.translate(key, params);
  }

}
