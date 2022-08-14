const num =
  'Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(
    ' ',
  );
const tens = 'Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split(' ');

export class EnglishTranslator implements ITranslator {
  translate(data: string): string {
    console.log('d', data);
    let n = Number(data);
    n = ~~n;
    const modulus = n % 10;
    if (n < 20) {
      data = num[n];
    }
    if (n < 100 && n > 19) {
      data = tens[~~(n / 10) - 2] + (modulus ? ' ' + num[modulus] : '');
    }
    if (n < 1000 && n > 99)
      data =
        num[~~(n / 100)] +
        ' Hundred' +
        (n % 100 == 0 ? '' : ' and ' + this.translate(String(n % 100)));
    if (n > 999) {
      data =
        this.translate(String(~~(n / 1000))) +
        ' Thousand' +
        (n % 1000 != 0 ? ' ' + this.translate(String(n % 1000)) : '');
    }
    return data;
  }
}
