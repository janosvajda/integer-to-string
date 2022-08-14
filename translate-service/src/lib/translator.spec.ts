import { Translator } from './Translator';

const translator = new Translator();
console.info(translator);
describe('Translator', () => {
  describe('Translator should have a language.', () => {
    it('Language should exists and equal en', () => {
      expect(translator.language).toBe('en');
    });
  });
  describe(`Translate below 20.`, () => {
    it('Translator should return Nineteen if data is 20', () => {
      expect(translator.translate('19')).toBe('Nineteen');
    });
  });
  describe(`Translate below 100 numbers.`, () => {
    it('Border: Translator should return Thirty if data is 99', () => {
      expect(translator.translate('99')).toBe('Ninety Nine');
    });
    it('Translator should return Thirty if data is 30', () => {
      expect(translator.translate('30')).toBe('Thirty');
    });
    it('Translator should return Thirty if data is 60', () => {
      expect(translator.translate('60')).toBe('Sixty');
    });
    it('Translator should return Thirty if data is 30', () => {
      expect(translator.translate('90')).toBe('Ninety');
    });
  });
  describe(`Translate below 1000 numbers.`, () => {
    it('Translator should return Thirty if data is 100', () => {
      expect(translator.translate('100')).toBe('One Hundred');
    });
    it('Translator should return Thirty if data is 110', () => {
      expect(translator.translate('110')).toBe('One Hundred and Ten');
    });
    it('Translator should return Thirty if data is 145', () => {
      expect(translator.translate('145')).toBe('One Hundred and Forty Five');
    });
    it('Translator should return Thirty if data is 823', () => {
      expect(translator.translate('823')).toBe(
        'Eight Hundred and Twenty Three',
      );
    });
    it('Translator should return Thirty if data is 500', () => {
      expect(translator.translate('500')).toBe('Five Hundred');
    });
    it('Border: Translator should return Thirty if data is 999', () => {
      expect(translator.translate('999')).toBe('Nine Hundred and Ninety Nine');
    });
  });
  describe(`Translate 1000 & above 1000 numbers.`, () => {
    it('Translator should return Thirty if data is 99999', () => {
      expect(translator.translate('99999')).toBe(
        'Ninety Nine Thousand Nine Hundred and Ninety Nine',
      );
    });
    it('Translator should return Thirty if data is 1000', () => {
      expect(translator.translate('1000')).toBe(
        'One Thousand',
      );
    });
  });
});
