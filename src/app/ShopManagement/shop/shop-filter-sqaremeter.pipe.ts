import { Pipe, PipeTransform } from '@angular/core';
import { Shop } from './shop';

@Pipe({
  name: 'shopFilterSqaremeter'
})
export class ShopFilterSqaremeterPipe implements PipeTransform {

  transform(value: Shop[], filterSquaremeter?: string):  Shop[] {
    filterSquaremeter=filterSquaremeter?filterSquaremeter.toString().toLocaleLowerCase():null
    return filterSquaremeter ? value.filter((s:Shop)=>s.squaremeter.toString().toLocaleLowerCase().indexOf(filterSquaremeter)!==-1) :value;
  }

}
