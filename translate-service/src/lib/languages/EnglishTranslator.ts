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
    console.log('NNN', n);
    console.log('NNN2', num);
    console.log('NNN3', num[n]);
    if (n < 20) {
      data = num[n];
    }
    if (n < 100 && n > 19) {
      data = tens[~~(n / 10) - 2] + (modulus ? ' ' + num[modulus] : '');
    }
    console.info('DATA: ', data);
    return data;
  }
}
