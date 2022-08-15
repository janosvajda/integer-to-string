import { Injectable } from '@nestjs/common';
import { nums } from '../nums/EnglishNums';
import { tens } from '../tens/EnglishTens';

@Injectable()
export class EnglishTranslator implements ITranslator {
  /**
   * @param number Number
   */
  calculateModulus(number: number) {
    return number % 10;
  }

  /**
   * @param data string
   */
  translate(data: string): string {
    let n = Number(data);
    n = ~~n;
    const modulus = this.calculateModulus(n);
    if (n < 20) {
      data = nums[n];
    }
    if (n < 100 && n > 19) {
      data = tens[~~(n / 10) - 2] + (modulus ? '-' + nums[modulus] : '');
    }
    if (n < 1000 && n > 99)
      data =
        nums[~~(n / 100)] +
        ' hundred' +
        (n % 100 == 0 ? '' : ' and ' + this.translate(`${n % 100}`));
    if (n > 999) {
      data =
        this.translate(`${~~(n / 1000)}`) +
        ' thousand' +
        (n % 1000 != 0 ? ' ' + this.translate(`${n % 1000}`) : '');
    }
    return data;
  }
}
