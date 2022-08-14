import { Test, TestingModule } from '@nestjs/testing';
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
  describe(`Translate modulus 10 numbers.`, () => {
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
});
