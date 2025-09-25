import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCasePipe',
  standalone: true,
})
export class CustomTitleCasePipePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
      return value
        .toLowerCase()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }

