import { Pipe, PipeTransform } from '@angular/core';
import { House } from './house';

@Pipe({
  name: 'houseFilterSaloon'
})
export class HouseFilterSaloonPipe implements PipeTransform {

  transform(value: House[], filterSaloon?: string):  House[] {
    filterSaloon=filterSaloon?filterSaloon.toString().toLocaleLowerCase():null
    return filterSaloon ? value.filter((h:House)=>h.numberOfSaloon.toString().toLocaleLowerCase().indexOf(filterSaloon)!==-1) :value;
  }

}
