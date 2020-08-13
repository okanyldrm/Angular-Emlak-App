import { Pipe, PipeTransform } from '@angular/core';
import { Shop } from './shop';

@Pipe({
  name: 'shopFilterHeating'
})
export class ShopFilterHeatingPipe implements PipeTransform {

  transform(value: Shop[], filterHeating?: string):  Shop[] {
    filterHeating=filterHeating?filterHeating.toString().toLocaleLowerCase():null
    return filterHeating ? value.filter((s:Shop)=>s.heating.toString().toLocaleLowerCase().indexOf(filterHeating)!==-1) :value;
  }

}
