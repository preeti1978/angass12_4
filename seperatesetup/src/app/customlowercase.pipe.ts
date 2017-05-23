import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customlowercase'
})
export class CustomlowercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toLowerCase();
  }

}
