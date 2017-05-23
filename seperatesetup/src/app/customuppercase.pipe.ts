import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customuppercase'
})
export class CustomuppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
