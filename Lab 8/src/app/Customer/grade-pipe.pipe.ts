import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe'
})
export class GradePipePipe implements PipeTransform {

  transform(value:number): string {
      if(value<100)
      {
        return 'Simple Customer';
      }
      else
      {
        return 'Gold Customer';
      }
  }

}
