import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {

  transform(input: any): any {
    const keys = [];
    for (let key in input) {
      if (input.hasOwnProperty(key)) {
        keys.push({ key: key, value: input[key]});
      }
    }
    return keys;
  };
}
