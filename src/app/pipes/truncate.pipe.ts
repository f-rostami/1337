import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 25, completeWords = false, ellipsis = '...', lastChar?: any) {
    if (completeWords && value.length > limit) {
      const lstChar = lastChar ? lastChar : ' ';
      limit = value.substr(0, limit).lastIndexOf(lstChar);
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }


}
