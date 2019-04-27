import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mode'
})
export class ModePipe implements PipeTransform {

  transform(isCashLess: boolean, args?: any): any {
    return isCashLess ? 'Yes' : 'No';
  }

}
