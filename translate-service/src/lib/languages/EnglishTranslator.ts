const num =
  'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
    ' ',
  );
const tens = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');

export class EnglishTranslator implements ITranslator {
  translate(data: string): string {
    let n = Number(data);
    n = ~~n;
    const modulus = n % 10;
    if (n < 20) {
      data = num[n];
    }
    if (n < 100 && n > 19) {
      data = tens[~~(n / 10) - 2] + (modulus ? '-' + num[modulus] : '');
    }
    if (n < 1000 && n > 99)
      data =
        num[~~(n / 100)] +
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
