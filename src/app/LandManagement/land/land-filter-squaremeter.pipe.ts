import { Pipe, PipeTransform } from '@angular/core';
import { Land } from './land';

@Pipe({
  name: 'landFilterSquaremeter'
})
export class LandFilterSquaremeterPipe implements PipeTransform {
  
  transform(value: Land[], filterSqaremeter?: string):  Land[] {
    filterSqaremeter=filterSqaremeter?filterSqaremeter.toString().toLocaleLowerCase():null
    return filterSqaremeter ? value.filter((l:Land)=>l.squaremeter.toString().toLocaleLowerCase().indexOf(filterSqaremeter)!==-1) :value;
  }

}
