import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    const currentYear: any = new Date()
    const age = currentYear.getFullYear() - value;
    return age;
  }

}
