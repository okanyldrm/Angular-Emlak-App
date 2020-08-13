import { Pipe, PipeTransform } from '@angular/core';
import { House } from './house';

@Pipe({
  name: 'houseFilterPrice'
})
export class HouseFilterPricePipe implements PipeTransform {

  transform(value: House[], filterPrice?: string):  House[] {
    filterPrice=filterPrice?filterPrice.toString().toLocaleLowerCase():null
    return filterPrice ? value.filter((h:House)=>h.price.toString().toLocaleLowerCase().indexOf(filterPrice)!==-1) :value;
  }

}
