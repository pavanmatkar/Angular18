import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    if(!products) return [];
    return [...products].sort((a, b) => 
      order === 'asc' ? a.price -b.price : b.price - a.price
    );
  }
}
