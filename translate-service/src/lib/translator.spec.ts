import { Test, TestingModule } from '@nestjs/testing';
import { Translator } from './translator';

const translator = new Translator();

describe('Translator', () => {
  describe('Translator should have a language.', () => {
    it('Language should exists and equal en', () => {
      expect('en').toBe(translator.language);
    });
  });
});
