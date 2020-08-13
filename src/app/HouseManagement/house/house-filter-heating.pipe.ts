import { Pipe, PipeTransform } from '@angular/core';
import { House } from './house';

@Pipe({
  name: 'houseFilterHeating'
})
export class HouseFilterHeatingPipe implements PipeTransform {

  transform(value: House[], filterHeating?: string):  House[] {
    filterHeating=filterHeating?filterHeating.toString().toLocaleLowerCase():null
    return filterHeating ? value.filter((h:House)=>h.heating.toString().toLocaleLowerCase().indexOf(filterHeating)!==-1) :value;
  }

}
