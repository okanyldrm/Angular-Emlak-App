import { Pipe, PipeTransform } from '@angular/core';
import { Land } from './land';

@Pipe({
  name: 'landFilterTitle'
})
export class LandFilterTitlePipe implements PipeTransform {

  transform(value: Land[], filterTitle?: string):  Land[] {
    filterTitle=filterTitle?filterTitle.toString().toLocaleLowerCase():null
    return filterTitle ? value.filter((l:Land)=>l.title.toString().toLocaleLowerCase().indexOf(filterTitle)!==-1) :value;
  }

}
