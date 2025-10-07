import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(products: any[], category: string): any[] {
    if(!products || category === 'All') return products;
    return products.filter(p => p.category === category);
  }
}
