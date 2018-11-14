import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(list: any, field: string,keyword:string): any {
    if(!field || !keyword){
      return list;
    }
    return list.filter(item => {
      let itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0;
    });
  }

}
