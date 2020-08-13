import { Pipe, PipeTransform } from '@angular/core';
import { House } from './house';

@Pipe({
  name: 'houseFilter'
})
export class HouseFilterPipe implements PipeTransform {

  transform(value: House[], filterText?: string): House[] {
  filterText=filterText?filterText.toString().toLocaleLowerCase():null
    return filterText ? value.filter((h:House)=>h.title.toString().toLocaleLowerCase().indexOf(filterText)!==-1) :value;
  }

}
