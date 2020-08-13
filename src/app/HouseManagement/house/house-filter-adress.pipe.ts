import { Pipe, PipeTransform } from '@angular/core';
import { House } from './house';

@Pipe({
  name: 'houseFilterAdress'
})
export class HouseFilterAdressPipe implements PipeTransform {

  transform(value: House[], filterAdress?: string): House[] {
    filterAdress=filterAdress?filterAdress.toString().toLocaleLowerCase():null
    return filterAdress ? value.filter((h:House)=>h.location.toString().toLocaleLowerCase().indexOf(filterAdress)!==-1) :value;
  }

}
