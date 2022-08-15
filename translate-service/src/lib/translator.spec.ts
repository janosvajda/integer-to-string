import { Translator } from './Translator';
import { EnglishTranslator } from './translators/EnglishTranslator';

const translator = new Translator(new EnglishTranslator());

describe('Translator', () => {
  describe('Translator should have a language.', () => {
    it('Language should exists and equal en', () => {
      expect(translator.language).toBe('en');
    });
  });
  describe(`Non happy path: If language is not supported.`, () => {
    it('If language is not en', () => {
      try {
        translator.language = 'hu';
      } catch (e) {
        expect(e.message).toBe('Language is not supported.');
      }
    });
  });
  describe(`Happy path: If language is supported.`, () => {
    it('If language is not en', () => {
      translator.language = 'en';
      expect(translator.translate('99')).toBe('ninety-nine');
    });
  });
  describe(`Translate below 20.`, () => {
    it('Translator should return Nineteen if data is 20', () => {
      expect(translator.translate('19')).toBe('nineteen');
    });
  });
  describe(`Translate below 100 numbers.`, () => {
    it('Border: Translator should return Thirty if data is 99', () => {
      expect(translator.translate('99')).toBe('ninety-nine');
    });
    it('Translator should return Thirty if data is 30', () => {
      expect(translator.translate('30')).toBe('thirty');
    });
    it('Translator should return Thirty if data is 60', () => {
      expect(translator.translate('60')).toBe('sixty');
    });
    it('Translator should return Thirty if data is 30', () => {
      expect(translator.translate('90')).toBe('ninety');
    });
  });
  describe(`Translate below 1000 numbers.`, () => {
    it('Translator should return Thirty if data is 100', () => {
      expect(translator.translate('100')).toBe('one hundred');
    });
    it('Translator should return Thirty if data is 110', () => {
      expect(translator.translate('110')).toBe('one hundred and ten');
    });
    it('Translator should return Thirty if data is 145', () => {
      expect(translator.translate('145')).toBe('one hundred and forty-five');
    });
    it('Translator should return Thirty if data is 823', () => {
      expect(translator.translate('823')).toBe(
        'eight hundred and twenty-three',
      );
    });
    it('Translator should return Thirty if data is 500', () => {
      expect(translator.translate('500')).toBe('five hundred');
    });
    it('Translator should return Thirty if data is 722', () => {
      expect(translator.translate('722')).toBe('seven hundred and twenty-two');
    });
    it('Border: Translator should return Thirty if data is 999', () => {
      expect(translator.translate('999')).toBe('nine hundred and ninety-nine');
    });
  });
  describe(`Translate 1000 & above 1000 numbers.`, () => {
    it('Translator should return Thirty if data is 99999', () => {
      expect(translator.translate('99999')).toBe(
        'ninety-nine thousand nine hundred and ninety-nine',
      );
    });
    it('Translator should return Thirty if data is 1000', () => {
      expect(translator.translate('1000')).toBe('one thousand');
    });
  });
});
