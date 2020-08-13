import { Pipe, PipeTransform } from '@angular/core';
import { House } from './house';

@Pipe({
  name: 'houseFilterRoom'
})
export class HouseFilterRoomPipe implements PipeTransform {

  transform(value: House[], filterRoom?: string): House[] {
    filterRoom=filterRoom?filterRoom.toString().toLocaleLowerCase():null
    return filterRoom ? value.filter((h:House)=>h.numberOfRoom.toString().toLocaleLowerCase().indexOf(filterRoom)!==-1) :value;
  }

}
