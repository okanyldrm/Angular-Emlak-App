import { Pipe, PipeTransform } from '@angular/core';
import { Shop } from './shop';

@Pipe({
  name: 'shopFilterPrice'
})
export class ShopFilterPricePipe implements PipeTransform {

  transform(value: Shop[], filterPrice?: string):  Shop[] {
    filterPrice=filterPrice?filterPrice.toString().toLocaleLowerCase():null
    return filterPrice ? value.filter((s:Shop)=>s.price.toString().toLocaleLowerCase().indexOf(filterPrice)!==-1) :value;
  }
}
