import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): unknown {
    let revArr = value.split('');
    let revStr = revArr.reverse().join('');
    return revStr;
  }

}