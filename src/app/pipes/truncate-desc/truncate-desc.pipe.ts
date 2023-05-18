import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDesc'
})
export class TruncateDescPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string { // il mio args é un array di numeri
    const numberOfChars = args[0] ? args[0] : 30 ;
    // prendo il primo elemento dell'array (30), se non c'é lo setto ad un minimo di 30
    const desc = value.slice(0, numberOfChars);
    let result = desc;
    if (value.length < numberOfChars) {
      return result;
    }
    return result + "...";
    return desc;
  }

}
