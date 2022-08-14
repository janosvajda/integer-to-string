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
  describe(`Translator should return ${'test'}.`, () => {
    it('Language should exists and equal en', () => {
      expect(translator.translate('hello')).toBe('hello');
    });
  });
});
