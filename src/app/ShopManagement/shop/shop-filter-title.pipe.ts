import { Pipe, PipeTransform } from '@angular/core';
import { Shop } from './shop';

@Pipe({
  name: 'shopFilterTitle'
})
export class ShopFilterTitlePipe implements PipeTransform {

  transform(value: Shop[], filterTitle?: string):  Shop[] {
    filterTitle=filterTitle?filterTitle.toString().toLocaleLowerCase():null
    return filterTitle ? value.filter((s:Shop)=>s.title.toString().toLocaleLowerCase().indexOf(filterTitle)!==-1) :value;
  }

}
