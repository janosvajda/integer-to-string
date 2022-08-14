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
  describe(`Translate below 100 numbers.`, () => {
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
  describe.only(`Translate below 1000 numbers.`, () => {
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
  });
});
