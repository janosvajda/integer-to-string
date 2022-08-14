const num =
  'Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(
    ' ',
  );

export class EnglishTranslator implements ITranslator {
  translate(data: string): string {
    return data;
  }
}
