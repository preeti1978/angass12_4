import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showOnlyIfStartingWithA' //name of pipe
})
export class ShowOnlyIfStartingWithAPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     if (!args) { //if no argumentsb prvided search for name starting with 'A' 
       if ((value.startsWith("A"))  ||  (value.startsWith("a")) ) {   	return true;}
       }
       else //if argument provided search for name starting with that argument
       	if ((value.startsWith(args))  ||  (value.startsWith(args)) )  {  		return true;}
          else return false; 
       	}

  }


