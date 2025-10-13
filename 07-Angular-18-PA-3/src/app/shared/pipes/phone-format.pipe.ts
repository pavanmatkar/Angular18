import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string | number | null | undefined): string {
    if (!value) return '';

    // Ensure we have only digits
    const digits = value.toString().replace(/\D/g, '');

    // Format only if we have 10 digits
    if (digits.length === 10) {
      const area = digits.slice(0, 3);
      const prefix = digits.slice(3, 6);
      const line = digits.slice(6);
      return `(${area}) ${prefix}-${line}`;
    }

    // Return original if not 10 digits
    return value.toString();
  }
}
