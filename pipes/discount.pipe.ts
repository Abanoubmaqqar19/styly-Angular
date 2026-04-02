import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

   transform(value: number, discount: number = 10): number {
    if (!value) return 0;

    const discountAmount = value * (discount / 100);
    return value - discountAmount;
  }

}
