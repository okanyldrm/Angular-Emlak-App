import { Pipe, PipeTransform } from '@angular/core';
import { Shop } from './shop';

@Pipe({
  name: 'shopFilterAdress'
})
export class ShopFilterAdressPipe implements PipeTransform {

 
  transform(value: Shop[], filterAdress?: string):  Shop[] {
    filterAdress=filterAdress?filterAdress.toString().toLocaleLowerCase():null
    return filterAdress ? value.filter((s:Shop)=>s.location.toString().toLocaleLowerCase().indexOf(filterAdress)!==-1) :value;
  }

}
