import { Pipe, PipeTransform } from '@angular/core';
import { Land } from './land';

@Pipe({
  name: 'landFilterReconstruction'
})
export class LandFilterReconstructionPipe implements PipeTransform {

  transform(value: Land[], filterReconstruction?: string):  Land[] {
    filterReconstruction=filterReconstruction?filterReconstruction.toString().toLocaleLowerCase():null
    return filterReconstruction ? value.filter((l:Land)=>l.reconstruction.toString().toLocaleLowerCase().indexOf(filterReconstruction)!==-1) :value;
  }

}
