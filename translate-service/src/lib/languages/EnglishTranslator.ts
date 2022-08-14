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
    console.log('NNN', n);
    console.log('NNN2', num);
    console.log('NNN3', num[n]);
    if (n < 20) data = num[n];
    console.log('KYUDYDYD', data);
    return data;
  }
}
